const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { google } = require('googleapis');
const fs = require("fs");
const credentials = require('./credentials.json');
const readline = require('readline');
const fileUpload = require('express-fileupload');
var async = require('async');
const path = require('path');


const client_id = credentials.web.client_id;
const client_secret = credentials.web.client_secret;
const redirect_uris = credentials.web.redirect_uris;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : path.join(__dirname,'tmp'),
}));

app.get('/', (req, res) => res.send('SY Structures API Running'));

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive'];

// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

let auth;

fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content));
});

function authorize(credentials) {
  // const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client);
    oAuth2Client.setCredentials(JSON.parse(token));
    auth = oAuth2Client;
  });
}

function getAccessToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      auth = authoAuth2Client;
    });
  });
}

app.post('/createFolder', (req, res) => {
  var fileMetadata = req.body
  // console.log(fileMetadata)
  // fileMetadata = {
  //   'name': 'Test Node',
  //   'parents': ['0B3sWiBPjF4DfNWJJaFU0a1I3amc'],
  //   'mimeType': 'application/vnd.google-apps.folder'
  // };
  // console.log(fileMetadata)

  // Authenticating drive API
  const drive = google.drive({ version: 'v3', auth });

  // Uploading Single image to drive
  drive.files.create(
    {
      resource: fileMetadata
    },
    async (err, response) => {
      if (err) {
        // Handle error
        console.error(err.msg);

        return res
          .status(400)
          .json({ errors: [{ msg: 'Server Error try again later' }] });
      } else {
        // if file upload success then return the unique google drive id
        console.log(response.data);
        // res.status(200).json({
        //   fileID: response.data.id,
        // });
      }
      res.send(response.data)
    }
  );
});

app.post('/getFolder', (req, res) => {
  var fileMetadata = req.body
  // console.log(fileMetadata)
  // var fileMetadata = {
  //   q: "mimeType='application/vnd.google-apps.folder'",
  //   q: "name='21'",
  //   fields: 'files(name, id)'
  // };
  // console.log(fileMetadata)

  
  // Authenticating drive API
  const drive = google.drive({ version: 'v3', auth });
  drive.files.list(fileMetadata,
  (err, response) => {
      if (err) {
          console.log('The API returned an error: ' + err);
          return res.status(400).send(err);
      }
      const files = response.data.files;
      if (files.length) {
          console.log('Files:');
          files.map((file) => {
              console.log(`${file.name} (${file.id})`);
          });
      } else {
          console.log('No files found.');
      }
      res.send(files);
  });
});

app.post('/uploadFile', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  const parentId = req.body.id;

  const drive = google.drive({ version: 'v3', auth });
    
    var fileMetadata = {
      name: file.name,
      parents: [parentId]
    };
    var media = {
      mimeType: file.mimeType,
      body: fs.createReadStream(file.tempFilePath)
    };
    drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id'
    }, function (err, response) {
      if (err) {
        // Handle error
        console.error(err);
      } else {
        const files = response.data.files;
        console.log("Uploaded " + file.name)
        res.send(files)
      }
    });
});

app.post('/listChildrenFolders', (req, res) => {
  var fileMetadata = req.body

  const drive = google.drive({ version: 'v3', auth });
  // Using the NPM module 'async'
  async.doWhilst(function (callback) {
    drive.files.list(fileMetadata,
    (err, response) => {
      if (err) {
        // Handle error
        console.error(err);
        callback(err)
      } else {
        response.data.files.forEach(function (file) {
          console.log('Found file: ', file.name);
        });
        pageToken = res.nextPageToken;
        callback();
      }
      res.send(response.data)
    });
  }, function () {
    return !!pageToken;
  }, function (err) {
    if (err) {
      // Handle error
      console.error(err);
    } else {
      // All pages fetched
    }
  })
});

app.post('/renameID', function (req, res) {
  var fileMetadata = req.body
  
  // Authenticating drive API
  const drive = google.drive({ version: 'v3', auth });
  var body = {'name': fileMetadata.name};
  drive.files.update({
    fileId: fileMetadata.fileId,
    resource: body,
  }, (err, response) => {
    if (err) {
      return console.log('The API returned an error: ' + err);
    }
    else {
      const files = response.data.files;
      console.log('The name of the file has been updated!');
      res.send(files)
    }
  });
});

app.post('/moveFile', function (req, res) {
  const fileId = req.body.fileId;
  const addParentId = req.body.addParentId;
  const removeParentId = req.body.removeParentId;
  
  // Authenticating drive API
  const drive = google.drive({ version: 'v3', auth });

  // fileId = '1sTWaJ_j7PkjzaBWtNc3IzovK5hQf21FbOw9yLeeLPNQ'
  // folderId = '0BwwA4oUTeiV1TGRPeTVjaWRDY1E'

  // Move the file to the new folder
  drive.files.update({
    fileId: fileId,
    addParents: addParentId,
    removeParents: removeParentId,
    fields: 'id, parents'
  }, function (err, response) {
    if (err) {
      // Handle error
      console.error(err);
    } else {
      const files = response.data;
      console.log("Moved " + fileId)
      res.send(files)
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started ${PORT}`));
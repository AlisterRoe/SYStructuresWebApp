import axios from 'axios'
import moment from 'moment'

const baseURL = "http://localhost:5000";

export async function savedReceivedDocAPI(queriedJobFolder, subFolder, fileArray) {
    var createdUploadFolder = null;
    var queriedChildrenList = null;
    var queriedSubFolder = null;
    var pageToken = null;

    await axios
        .post(baseURL+'/getFolder', {
          q: "mimeType='application/vnd.google-apps.folder' and name='" + subFolder + "' and '" + queriedJobFolder[0].id + "' in parents",
          fields: 'files(name,id)'
        })
        .then((response) => {
          queriedSubFolder = response.data;
        //   console.log('End getSubFolderID ' + queriedSubFolder[0].id)
        });

    if (subFolder === 'CAD') {
        await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='Received' and '" + queriedSubFolder[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            queriedSubFolder = response.data;
            // console.log('End getSubFolderID ' + queriedSubFolder[0].id)
        });
    }

    await axios
    .post(baseURL+'/listChildrenFolders', {
        q: "mimeType='application/vnd.google-apps.folder' and '" + queriedSubFolder[0].id + "' in parents",
        fields: 'nextPageToken, files(id, name)',
        spaces: 'drive',
        pageToken: pageToken
    })
    .then((response) => {
        queriedChildrenList = response.data;
        // console.log('End getSubFolderChildrenList ' + queriedChildrenList.files[0].name)
    });
    
    if (queriedChildrenList.files.length === 0) {
        console.log('No folders');
        var latestFile = '00';
    } else {
        var latestFile = await queriedChildrenList.files[0].name.toString();
    }
    var date = await moment().format("DD MMMM YYYY").toLocaleString();
    var fileNumber = await Number(latestFile.substring(0, 2));
    await fileNumber++;
    if (fileNumber.toString().length === 1) {
        fileNumber = await '0' + fileNumber;
    }
    var name = await fileNumber + ' - ' + date;
    await axios
    .post(baseURL+'/createFolder', {
        name: name,
        parents: [queriedSubFolder[0].id],
        mimeType: 'application/vnd.google-apps.folder'
    })
    .then((response) => {
        createdUploadFolder = response.data.id;
        // console.log('End createFolder ' + createdUploadFolder)
    });

    // console.log(fileArray);

    for (var i = 0; i < fileArray.length; i++) {
        const formData = new FormData();
        formData.append('file', fileArray[i]);
        formData.append('id', createdUploadFolder);

        try {
            axios.post(baseURL + '/uploadFile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            });
        } catch (err) {
            if (err.response.status === 500) {
            // setMessage('There was a problem with the server');
            } else {
            // setMessage(err.response.data.msg);
            }
        }
    }
    return [createdUploadFolder, name];
}
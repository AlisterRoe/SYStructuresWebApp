import axios from 'axios'
import moment from 'moment'

const baseURL = "http://localhost:5000";

export async function savedReceivedDocAPI(queriedJobFolder, subFolder, fileArrayFunc) {
    var createdUploadFolderFunc = null;
    var queriedChildrenListFunc = null;
    var queriedSubFolderFunc = null;
    var pageToken = null;

    await axios
        .post(baseURL+'/getFolder', {
          q: "mimeType='application/vnd.google-apps.folder' and name='" + subFolder + "' and '" + queriedJobFolder[0].id + "' in parents",
          fields: 'files(name,id)'
        })
        .then((response) => {
          queriedSubFolderFunc = response.data;
        //   console.log('End getSubFolderID ' + queriedSubFolderFunc[0].id)
        });

    if (subFolder === 'CAD') {
        await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='Received' and '" + queriedSubFolderFunc[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            queriedSubFolderFunc = response.data;
            // console.log('End getSubFolderID ' + queriedSubFolderFunc[0].id)
        });
    }

    await axios
    .post(baseURL+'/listChildrenFolders', {
        q: "mimeType='application/vnd.google-apps.folder' and '" + queriedSubFolderFunc[0].id + "' in parents",
        fields: 'nextPageToken, files(id, name)',
        spaces: 'drive',
        pageToken: pageToken
    })
    .then((response) => {
        queriedChildrenListFunc = response.data;
        // console.log('End getSubFolderChildrenList ' + queriedChildrenListFunc.files[0].name)
    });
      
    var date = await moment().format("DD MMMM YYYY").toLocaleString();
    var latestFile = await queriedChildrenListFunc.files[0].name.toString();
    var fileNumber = await Number(latestFile.substring(0, 2));
    await fileNumber++;
    if (fileNumber.toString().length === 1) {
    fileNumber = await '0' + fileNumber;
    }
    var name = await fileNumber + ' - ' + date;
    await axios
    .post(baseURL+'/createFolder', {
        name: name,
        parents: [queriedSubFolderFunc[0].id],
        mimeType: 'application/vnd.google-apps.folder'
    })
    .then((response) => {
        createdUploadFolderFunc = response.data.id;
        // console.log('End createFolder ' + createdUploadFolderFunc)
    });

    // console.log(fileArrayFunc);

    for (var i = 0; i < fileArrayFunc.length; i++) {
        const formData = new FormData();
        formData.append('file', fileArrayFunc[i]);
        formData.append('id', createdUploadFolderFunc);

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
    return [createdUploadFolderFunc, name];
}
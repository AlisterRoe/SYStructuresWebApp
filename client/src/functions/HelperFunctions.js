import axios from 'axios'
import moment from 'moment'

const baseURL = "https://sy-custom-api-web-app.ts.r.appspot.com";

export async function savedReceivedDocAPI(queriedJobFolder, subFolder, fileArray) {
    var queriedSubFolder = null;
    var queriedChildrenList = null;
    var createdUploadFolder = null;
    var pageToken = null;

    if (subFolder === 'Geotechnical') {
        await axios
            .post(baseURL+'/getFolder', {
                q: "mimeType='application/vnd.google-apps.folder' and name='Engineering' and '" + queriedJobFolder[0].id + "' in parents",
                fields: 'files(name,id)'
            })
            .then((response) => {
                queriedSubFolder = response.data;
                // console.log('End getSubFolderID ' + queriedSubFolder[0].id)
            });

        await axios
            .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='" + subFolder + "' and '" + queriedSubFolder[0].id + "' in parents",
            fields: 'files(name,id)'
            })
            .then((response) => {
            queriedSubFolder = response.data;
            //   console.log('End getSubFolderID ' + queriedSubFolder[0].id)
            });
    } else {
        await axios
            .post(baseURL+'/getFolder', {
              q: "mimeType='application/vnd.google-apps.folder' and name='" + subFolder + "' and '" + queriedJobFolder[0].id + "' in parents",
              fields: 'files(name,id)'
            })
            .then((response) => {
              queriedSubFolder = response.data;
            //   console.log('End getSubFolderID ' + queriedSubFolder[0].id)
            });
    }

    if (subFolder !== 'Photos') {
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
    
    var latestFile = '';
    var sortedChildrenList = queriedChildrenList.files.sort((a, b) => (a.name > b.name) ? 1 : -1);
    // console.log(sortedChildrenList);
    if (sortedChildrenList.length === 0) {
        // console.log('No folders');
        latestFile = '00';
    } else {
        latestFile = await sortedChildrenList[sortedChildrenList.length - 1].name.toString();
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

    for (var i = 0; i < fileArray.length; i++) {
        const formData = new FormData();
        await formData.append('file', fileArray[i]);
        await formData.append('id', createdUploadFolder);

        try {
            await axios.post(baseURL + '/uploadFile', formData, {
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

export async function savedIssuedDocIssuedAPI(queriedJobFolder, fileArray) {
    var queriedSubFolder = null;
    var queriedChildrenList = null;
    var createdUploadFolder = null;
    var pageToken = null;

    await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='CAD' and '" + queriedJobFolder[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            queriedSubFolder = response.data;
        //   console.log('End getSubFolderID ' + queriedSubFolder[0].id)
        });

    await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='SY' and '" + queriedSubFolder[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            queriedSubFolder = response.data;
        //   console.log('End getSubFolderID ' + queriedSubFolder[0].id)
        });

    await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='Issued' and '" + queriedSubFolder[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            queriedSubFolder = response.data;
        //   console.log('End getSubFolderID ' + queriedSubFolder[0].id)
        });

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
    
    var latestFile = '';
    var sortedChildrenList = queriedChildrenList.files.sort((a, b) => (a.name > b.name) ? 1 : -1);
    // console.log(sortedChildrenList);
    if (sortedChildrenList.length === 0) {
        // console.log('No folders');
        latestFile = '00';
    } else {
        latestFile = await sortedChildrenList[sortedChildrenList.length - 1].name.toString();
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

    for (var i = 0; i < fileArray.length; i++) {
        const formData = new FormData();
        await formData.append('file', fileArray[i]);
        await formData.append('id', createdUploadFolder);

        try {
            await axios.post(baseURL + '/uploadFile', formData, {
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

export async function savedIssuedDocCurrentAPI(queriedJobFolder, fileArray) {
    var queriedSubFolder = null;
    var queriedChildrenList = null;
    // var createdUploadFolder = null;
    var pageToken = null;
    var supersededFolder = null;

    await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='CAD' and '" + queriedJobFolder[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            queriedSubFolder = response.data;
        //   console.log('End getSubFolderID ' + queriedSubFolder[0].id)
        });

    await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='SY' and '" + queriedSubFolder[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            queriedSubFolder = response.data;
        //   console.log('End getSubFolderID ' + queriedSubFolder[0].id)
        });

    await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='Current PDF' and '" + queriedSubFolder[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            queriedSubFolder = response.data;
        //   console.log('End getSubFolderID ' + queriedSubFolder[0].id)
        });
        
    await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='SS' and '" + queriedSubFolder[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            supersededFolder = response.data;
            // console.log('End getSubFolderID ' + supersededFolder[0].id)
        });

    await axios
        .post(baseURL+'/listChildrenFolders', {
            q: "'" + queriedSubFolder[0].id + "' in parents",
            fields: 'nextPageToken, files(id, name)',
            spaces: 'drive',
            pageToken: pageToken
        })
        .then((response) => {
            queriedChildrenList = response.data;
            // console.log('End getSubFolderChildrenList ' + queriedChildrenList.files[0].name)
        });
    
    var supersededFiles = [];
    var outdatedFiles = [];
    await queriedChildrenList.files.forEach(function (existingFile) {
        for (var i = 0; i < fileArray.length; i++) {
            var existing_revision_index = existingFile.name.lastIndexOf("_");
            if (existing_revision_index !== -1) {
                var existing_base_name = existingFile.name.substr(0,existing_revision_index);
                var new_revision_index = fileArray[i].name.lastIndexOf("_");
                if (new_revision_index !== -1) {
                    var new_base_name = fileArray[i].name.substr(0,new_revision_index);
                    if (existing_base_name === new_base_name) {
                        var existing_revision = existingFile.name.substr(existing_revision_index + 1);
                        var new_revision = fileArray[i].name.substr(new_revision_index + 1);
                        var existing_decimal_index = existing_revision.lastIndexOf(".");
                        var new_decimal_index = new_revision.lastIndexOf(".");
                        existing_revision = existing_revision.substr(0,existing_decimal_index);
                        new_revision = new_revision.substr(0,new_decimal_index);
                        if (isNaN(new_revision) === false && isNaN(existing_revision) === false) {
                            var existing_revision_number = Number(existing_revision);
                            var new_revision_number = Number(new_revision);
                            if (new_revision_number >= existing_revision_number) {
                                supersededFiles.push(existingFile.id);
                            } else {
                                outdatedFiles.push(i);
                            }
                        } else if (isNaN(new_revision) === true && isNaN(existing_revision) === true) {
                            var existing_revision_letter = Number(existing_revision.charCodeAt(0));
                            var new_revision_letter = Number(new_revision.charCodeAt(0));
                            if (new_revision_letter >= existing_revision_letter) {
                                supersededFiles.push(existingFile.id);
                            } else {
                                outdatedFiles.push(i);
                            }
                        }
                    }
                }
            }
        }
    });

    for (var i = 0; i < supersededFiles.length; i++) {
        const formData = new FormData();
        await formData.append('fileId', supersededFiles[i]);
        await formData.append('addParentId', supersededFolder[0].id);
        await formData.append('removeParentId', queriedSubFolder[0].id);

        try {
            await axios.post(baseURL + '/moveFile', formData, {});
        } catch (err) {
            if (err.response.status === 500) {
            // setMessage('There was a problem with the server');
            } else {
            // setMessage(err.response.data.msg);
            }
        }
    }

    for (var j = 0; j < fileArray.length; j++) {
        if (!outdatedFiles.includes(j)) {
            const formData = new FormData();
            await formData.append('file', fileArray[j]);
            await formData.append('id', queriedSubFolder[0].id);

            try {
                await axios.post(baseURL + '/uploadFile', formData, {
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
    }
}

export async function cleanXlsxAPI(queriedJobFolder, fileNameArray) {
    var queriedSubFolder = null;
    var queriedChildrenList = null;
    // var createdUploadFolder = null;
    var pageToken = null;
    var supersededFolder = null;

    await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='CAD' and '" + queriedJobFolder[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            queriedSubFolder = response.data;
        //   console.log('End getSubFolderID ' + queriedSubFolder[0].id)
        });

    await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='SY' and '" + queriedSubFolder[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            queriedSubFolder = response.data;
        //   console.log('End getSubFolderID ' + queriedSubFolder[0].id)
        });

    await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='Current PDF' and '" + queriedSubFolder[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            queriedSubFolder = response.data;
        //   console.log('End getSubFolderID ' + queriedSubFolder[0].id)
        });
        
    await axios
        .post(baseURL+'/getFolder', {
            q: "mimeType='application/vnd.google-apps.folder' and name='SS' and '" + queriedSubFolder[0].id + "' in parents",
            fields: 'files(name,id)'
        })
        .then((response) => {
            supersededFolder = response.data;
            // console.log('End getSubFolderID ' + supersededFolder[0].id)
        });

    await axios
        .post(baseURL+'/listChildrenFolders', {
            q: "'" + queriedSubFolder[0].id + "' in parents",
            fields: 'nextPageToken, files(id, name)',
            spaces: 'drive',
            pageToken: pageToken
        })
        .then((response) => {
            queriedChildrenList = response.data;
            // console.log('End getSubFolderChildrenList ' + queriedChildrenList.files[0].name)
        });
    
    var supersededFiles = [];
    // var outdatedFiles = [];
    await queriedChildrenList.files.forEach(function (existingFile) {
        var existing_decimal_index = existingFile.name.lastIndexOf(".");
        if (existing_decimal_index !== -1) {
            var existingFileName = existingFile.name.substr(0,existing_decimal_index);
            for (var i = 0; i < fileNameArray.length; i++) {
                if (existingFileName === fileNameArray[i]) {
                    break;
                } else if (i === (fileNameArray.length-1)) {
                    supersededFiles.push(existingFile.id);
                }
            }
        }
    });

    for (var i = 0; i < supersededFiles.length; i++) {
        const formData = new FormData();
        await formData.append('fileId', supersededFiles[i]);
        await formData.append('addParentId', supersededFolder[0].id);
        await formData.append('removeParentId', queriedSubFolder[0].id);

        try {
            await axios.post(baseURL + '/moveFile', formData, {});
        } catch (err) {
            if (err.response.status === 500) {
            // setMessage('There was a problem with the server');
            } else {
            // setMessage(err.response.data.msg);
            }
        }
    }
}
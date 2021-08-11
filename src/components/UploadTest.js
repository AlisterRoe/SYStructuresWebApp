import React, {Component} from 'react';
import GooglePicker from 'react-google-picker';

import { Button } from 'react-bootstrap'

class UploadTest extends Component{
  render(){
   return (
      <GooglePicker clientId={process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID}
              developerKey={process.env.REACT_APP_GOOGLE_DRIVE_API_KEY}
              scope={['https://www.googleapis.com/auth/drive']}
              onChange={data => console.log('on change:', data)}
              onAuthFailed={data => console.log('on auth failed:', data)}
              multiselect={true}
              navHidden={true}
              authImmediate={false}
              viewId={'DOCS'}
              mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
              createPicker={ (google, oauthToken) => {
                const googleViewId = google.picker.ViewId.DOCS;
                const uploadView = new google.picker.DocsUploadView();
                const docsView = new google.picker.DocsView(googleViewId)
                    .setIncludeFolders(true)
                    .setSelectFolderEnabled(true);

                const picker = new window.google.picker.PickerBuilder()
                .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
                  .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                    // .addView(docsView)
                    .addView(uploadView)/*DocsUploadView added*/
                    .setOAuthToken(oauthToken)
                    // .setDeveloperKey(process.env.REACT_APP_GOOGLE_DRIVE_API_KEY)
                    .setCallback((data)=>{
                      if (data.action == google.picker.Action.PICKED) {
                          var fileId = data.docs[0].id;
                          alert('The user selected: ' + fileId);
                        //   picker();
                      }
                    });
                picker.build().setVisible(true);
            }}>
            <Button className="w-50" variant="outline-dark" type="submit">Click Here</Button>
            <div className="google"></div>
        </GooglePicker>
     );
   }
}

export default UploadTest
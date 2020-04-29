import React from 'react'
import Editor from 'react-slate-editor';

const toolbar = ['bold', 'italic', 'underline', 'code', 'fontSize', 'sizeUp', 'sizeDown', 'link', 'image', 'orderedList', 'unorderedList', 'alignment']

const AltTextEditor = () => {
    
    // function onEditorChange(value) { // function for set your state or post to your api
    //     postToApi(value) // html file ready to be saved to server
    //   }
    
    return (
        <Editor
          initialValue={'<p></p>'}
          toolbar={toolbar} //customize your toolbar
          uploadServerLink={'https://whereyouuploadit.com'} // add your upload api link here
          accessToken={'add your server token'} // give me some access please
        />
      );
}

export default AltTextEditor;
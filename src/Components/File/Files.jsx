import React from 'react'
import { useState } from 'react'
import storage from "./Firebase"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'



const Files=() =>{

const [upfile, setFile] = useState();
const [fileUrl, setFileUrl] = useState();

    const handleFile = (e) =>{
        setFile(e.target.files[0])
        
    }

    // let bucketName = "documents";
    // let file = upfile;
    // let storageRef = firebase.storage().re;
    // let uploadTask = storageRef.put(file);
    // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
    //   let downloadURL = uploadTask.snapshot.downloadURL;
    //   //this.setState.urlFile = downloadURL;
    //   //console.log("URL :", this.state.urlFile);
    //   storageRef.getDownloadURL().then((url) => {
    //     this.setState({ urlFile: url });

    //     console.log("Download:", this.state.urlFile);
    //   });
    // });


    const handleSave = () => {
        const fileRef = ref(storage,`documents/${upfile.name}`)
        uploadBytes(fileRef, upfile).then((res)=>{
            getDownloadURL(fileRef).then((promise)=>{
                console.log(promise)
            })

         

        })

      };


  return (
  
    <div>Files

    <br/>
    
    <input type="file" onChange={(e)=>{
        handleFile(e)
    }}/>

    <div onClick={()=>{handleSave()}}>upload</div>
 

    </div>
  )
}

export default Files
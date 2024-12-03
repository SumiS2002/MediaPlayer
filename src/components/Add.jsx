/* eslint-disable react/prop-types */
import { useState } from "react"
import { Modal,Button,FloatingLabel,Form } from "react-bootstrap"
import {uploadVideoAPI} from "../servies/allAPI"



function Add({setUploadVideoResponse}) {

  //values access
  const [uploadVideo,setUploadVideo] = useState({
    caption:"",imageURL:"",youtubeLink:""
  })
  console.log(uploadVideo);


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
  };
  const handleShow = () => setShow(true);

  //embed logic
  const getYoutubeEmbedLink = (link)=>{
    if(link.includes("v=")){
      //valid
      let videoId = link.split("v=")[1].slice(0,11)
      setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})

    }else{
      //invalid url
      setUploadVideo({...uploadVideo,youtubeLink:""})
      alert("Input crt url....")
    }

  }

  const handleUpload = async ()=>{
    const {caption,imageURL,youtubeLink} = uploadVideo
    if(caption && imageURL && youtubeLink){
      //uplod to procss
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        //
        alert(`Video ${result.data.caption} uploaded successfully...`)
        setUploadVideoResponse(result.data)
        handleClose()
      }else{
        //
        alert("API Faild...")
      }
    }else{
      //fail
      alert("Plzz fill comppletely....")
    }
  }

  return (
    <>
    <div className="d-flex">
      <h5>Upload a Video</h5>
<div>
        <button onClick={handleShow} className="btn rounded bg-secondary ms-2"><i className="fa-solid fa-plus"></i> </button>
  </div>   
 </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the details...</p>
      <div className="border rounded p-3 border-info">
        {/* 1st */}
          <FloatingLabel
          controlId="floatingInputCaption"
          label="Video Caption"
          className="mb-3">
          <Form.Control value={uploadVideo.caption} type="email" placeholder="Video Caption" onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
        </FloatingLabel>

        {/* 2nd */}
        <FloatingLabel
          controlId="floatingInputImg"
          label="Img Url"
          className="mb-3">
          <Form.Control value={uploadVideo.imageURL} type="email" placeholder="Img Url" on onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} />
        </FloatingLabel>

        {/* 3rd */}
        <FloatingLabel
          controlId="floatingInputLink"
          label="Youtube Video Link"
          className="mb-3">
          <Form.Control value={uploadVideo.youtubeLink} type="email" placeholder="Youtube Video Link" onChange={e=>getYoutubeEmbedLink(e.target.value)} />
        </FloatingLabel>


      </div>       
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className="btn btn-info">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
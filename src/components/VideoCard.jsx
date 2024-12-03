/* eslint-disable react/prop-types */
import { Card,Modal } from "react-bootstrap"
import { useState } from 'react';
import { removeVideoAPI, saveHistoryAPI } from "../servies/allAPI";



function VideoCard({displayData,setDeleteVideoResponse,insideCategory}) {

  //delete
  const deleteVideo = async(vId)=>{
    //api call
    const result = await removeVideoAPI(vId)
    setDeleteVideoResponse(result?.data)
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const {caption,youtubeLink} = displayData
    let timeDate = new Date()
    // console.log(timeDate);
    let timeStamp = new Intl.DateTimeFormat('en-US',{
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(timeDate)
    console.log(timeStamp);

    await saveHistoryAPI({caption,youtubeLink,timeStamp})

  }

      //dragStarted
      const dragStarted = (e,vId)=>{
        console.log(`Drag Started with  video id : ${vId}`);
        e.dataTransfer.setData("videoId",vId)
      }
  
  return (
    <>
     <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} className="shadow">
      <Card.Img style={{cursor:'pointer'}} onClick={handleShow} variant="top" height={'200px'} src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between ">
          <p>{displayData?.caption}</p>
{    !insideCategory &&      <div onClick={()=>deleteVideo(displayData?.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></div>       
}        </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="400" src={`${displayData?.youtubeLink}?autoplay=1`} title="Caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe></Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard
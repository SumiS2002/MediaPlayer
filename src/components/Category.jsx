/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Modal,Button,FloatingLabel,Form } from "react-bootstrap"
import { addCategoryAPI, getAllCategoriesAPI, getAVideoAPI, removeCategoryAPI, updateCategoryAPI } from "../servies/allAPI";
import VideoCard from "./VideoCard";

function Category({removeCategoryVideoResponse}) {
  //get all category
  const [allCategories,setAllCategories] = useState([])

    //add catagory
  const [catagoryName,setCatagoryName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCatagoryName("")
  }
  const handleShow = () => setShow(true);

    //add catagory
    const handleAddCategory = async()=>{
      if(catagoryName){
        const result = await addCategoryAPI({catagoryName,allVideos:[]})
        console.log(result);
        handleClose()
        getAllCategories()
      }else{
        alert("Plzz fill form catagory")
      }
    }
//get all category
    const getAllCategories = async ()=>{
      const result = await getAllCategoriesAPI()
      setAllCategories(result.data)
    }
    console.log(allCategories);
    useEffect(()=>{
      getAllCategories()
    },[removeCategoryVideoResponse])

    //remove category
    const handleRemoveCategory = async (cId)=>{
      await removeCategoryAPI(cId)
      getAllCategories()
    }

    const videoDropped = async (e,categoryId)=>{
      const videoId = e.dataTransfer.getData("videoId")
      console.log(`Video Dropped with id ${videoId},inside categoy id ${categoryId}`);
      //getdetail of video to be dropped
    const {data} = await getAVideoAPI(videoId)
    console.log(data);
    //get categrory details where we have add a video
    const selectedCategory = allCategories.find(items=>items.id==categoryId)
    console.log(selectedCategory);
    selectedCategory.allVideos.push(data)
    await updateCategoryAPI(categoryId,selectedCategory)
    getAllCategories()
    }

    const dragOverCategory = (e)=>{
      e.preventDefault()
      console.log(`Dragging over category`);
    }

    //return drag
    const videoDragStarted = (e,videoId,categoryId)=>{
      console.log(`Drag started from category id :${categoryId} with video ${videoId}`);
      let dataShare = {videoId,categoryId}
      e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
 
    }
    

  return (
    <>
       <div className="d-flex justify-content-around">
        <h3>All Category</h3>
        <button onClick={handleShow} className="btn rounded bg-secondary ms-2"><i className="fa-solid fa-plus"></i> </button>
        </div>
      <div  className="container-fluid mt-3">
      {allCategories.length>0? allCategories.map((items,index)=>(
        <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,items?.id)} key={index} className="border rounded p-3 mb-5">
          <div className="d-flex justify-content-between mb-5">
            <h5 className="text-warning">{items.catagoryName}</h5>
            <button onClick={()=>handleRemoveCategory(items.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>

            </div>
            <div className="row mt-2 ">
            {items.allVideos.length>0 &&
            items.allVideos?.map((video,index)=>(
              <div draggable onDragStart={e=>videoDragStarted(e,video.id,items.id)} key={index} className="col-lg-6 mb-2">
                <VideoCard insideCategory={true} displayData={video}/>
              </div>
            ))
            
            }

            </div>

        </div>
        
      ))

      :
      <div>No data</div>
      
    }
      </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Video Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the details...</p>
      <div className="border rounded p-3 border-info">
        {/* 1st */}
          <FloatingLabel
          controlId="floatingInputCaption"
          label="Video Caption"
          className="mb-3">
          <Form.Control  value={catagoryName} onChange={(e)=>setCatagoryName(e.target.value)} type="email" placeholder="Video Caption" />
        </FloatingLabel>

      </div>       
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} className="btn btn-info">Add</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Category
/* eslint-disable react/prop-types */
import { Row,Col } from "react-bootstrap"
import VideoCard from '../components/VideoCard'
import { useEffect, useState } from "react"
import { getAllVideoAPI, getSingleCategoryAPI, updateCategoryAPI } from "../servies/allAPI"


function View({uploadVideoResponse,setRemoveCategoryVideoResponse}) {

  //delete
  const [deleteVideoResponse,setDeleteVideoResponse] = useState("")

  const [allVideos,setAllVideos] = useState([])

  const getAllVideos = async ()=>{
    const result = await getAllVideoAPI()
    // console.log(result);
    if(result?.status==200){
     setAllVideos(result?.data);
    }
  }
  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse,deleteVideoResponse])
  console.log(allVideos);

  const dragOverView = (e)=>{
    e.preventDefault()
  }

  const handleCategoryVideo = async (e)=>{
    const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
    console.log(`Remove video Id : ${videoId} from category id ${categoryId}`);
    //get a category
    const {data} = await getSingleCategoryAPI(categoryId)
    console.log(data);
    const updatedVideoList = data.allVideos.filter(item=>item.id!=videoId)
    console.log(updatedVideoList);
    const {id,categoryName} = data
   const res = await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedVideoList})
   setRemoveCategoryVideoResponse(res.data)

  }
  return (

    <>
    <Row droppable="true" onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)} >
      {allVideos?.length>0?allVideos.map((video,index)=>(
        <Col key={index} className="mb-4" sm={12} md={6} lg={4} >
            <VideoCard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse} />
        </Col>
      ))
      :
      <div>No videos to display</div>
      }
    </Row>
    </>
  )
}

export default View
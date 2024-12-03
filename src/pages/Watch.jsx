import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getHistoryAPI, removeHistoryAPI } from "../servies/allAPI"


function Watch() {
  const [histroy,setHistory] = useState([])
  const getAllHistory = async ()=>{
    const result = await getHistoryAPI()
    if(result.status>=200 && result.status<300){
      setHistory(result.data)
    }
  }
  useEffect(()=>{
    getAllHistory()
  },[])


  const deleteHistory = async (vId)=>{
    //api call
    await removeHistoryAPI(vId)
    getAllHistory()
  }
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back To <i className="fa-solid fa-home"></i></Link>
      </div>
      <table className="table mt-5 mb-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>
          {histroy?.length>0?histroy.map((video,index)=>(
            <tr key={index}>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td><a target="_blank" href={video?.youtubeLink}>{video?.youtubeLink}</a></td>
            <td>{video?.timeStamp}</td>
            <td><button onClick={()=>deleteHistory(video.id)} className='btn'> <i className="fa-solid fa-trash text-danger"></i></button></td>
  
</tr>        

          ))

            :
            <tr>No Data</tr>
          }
          
</tbody>

      </table>
    </div>
  )
}

export default Watch
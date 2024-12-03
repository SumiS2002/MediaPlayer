import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"



function LandingPage() {
//calling hook and asign to a var
 const navigate = useNavigate()


  const handleClick = ()=>{
    //navigate to home
    navigate('/home')
  }
  return (
    <div className="container mt-5">
      <div className="header row align-itemns-center">
        <div className="col lg-5">
          <h3>Welcome <span className="text-warning">To Media Player</span></h3>
          <p className="mt-3" style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nostrum labore exercitationem necessitatibus debitis voluptates repellendus in rerum!
             Iste ratione ex in molestias voluptate ea similique quis esse! Quae, eum!</p>

               <button onClick={handleClick} className="btn btn-info">Get Started</button>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="Landing image" style={{width:'100%', height:'380px'}} />
        </div>
      </div>
      <div className="feater">
        <h3 className="text-center mt-5">Features</h3>
        <div className="row ">
          <div className="col-lg-4">
          <Card  >
      <Card.Img  variant="top" style={{height:'450px'}}  src="https://i.pinimg.com/originals/62/0c/5a/620c5a819f8b8fa2a75575edf1d155ec.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
        User can upload ,view and remove the videos
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card >
      <Card.Img style={{height:'450px'}} variant="top" src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" />
      <Card.Body>
        <Card.Title>Catagorize Videos</Card.Title>
        <Card.Text>
        User can catagorise the video according  using D&D
        </Card.Text>
      </Card.Body>
    </Card>

          </div>
          <div className="col-lg-4">
          <Card >
      <Card.Img style={{height:'450px'}} variant="top" src="https://i.pinimg.com/originals/ec/8d/da/ec8dda885688ef35203135cc247e2259.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
        User are able to see the history of watched videos
        </Card.Text>
      </Card.Body>
    </Card>

          </div>

        </div>

      </div>
      <div className="row video mt-5 border p-5 rounded">
        <div className="col-lg-6">
          <h3 className="text-warning">Simple,Fast and Powerful</h3>
          <p><span className="fs-4">Managing Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum the do the ayje uda!</p>
          <p><span className="fs-4">Catagorize Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum the do the ayje uda!</p>
          <p><span className="fs-4">Watch History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum the do the ayje uda!</p>

        </div>
        <div className="col-lg-6"><iframe width="100%" height="514"  src="https://www.youtube.com/embed/ew1fKCWb_M4" title="Vaseegara Official Video | Full HD | Minnale | Harris Jayaraj | Madhavan | Gautham V Menon"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
      </div>
      <hr />
    </div>
  )
}

export default LandingPage
import React from "react";
import ReactPlayer from 'react-player'

const LatestNews = () => {
  return (
    <div className="d-flex ">
      <div className="card mr-2" style={{ width: "16rem" }}>
        <div className="card-body" style={{ textAlign: "left" }}>
          <h5 className="card-title" style={{ color: "#217867" }}>
            LATEST NEWS
          </h5>
          <p className="card-text">
            An honest day's work,<br></br> a cider spill and an <br></br>
            unreplaced ball
          </p>
          <hr></hr>
          <p className="card-text">
            Media-rights auction: No <br></br>global players but IPL <br></br>
            expects big show
          </p>
          <hr></hr>
           <p className="card-text">
           Rohit Sharma recalled to ODI <br></br> squad for Australia series
            <br></br> 1d ago
          </p>
          <hr></hr>
          <p className="card-text">
           Virat kohli tests COVID <br></br> positive; to miss second <br></br>
            England Test 1d ago
          </p>
         
          <h5 style={{color:"#217867"}}>LATEST PHOTO</h5>
          <img
              width= "100%"
              className="card-img-top"
              src="https://images.livemint.com/img/2021/12/13/1600x900/Rohit_Sharma_1639404734670_1639404734816.jpg"
              alt="Card image cap"
            />
            <p>Rohit sharma is the Num. One Batsman in ODI.</p>
       
            <img
              width= "100%"
              className="card-img-top"
              src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/15/Pictures/icc-cricket-awards-2020_f4b7dfc0-9699-11ea-b40c-d7c2b81d84c3.jpg"
              alt="Card image cap"
            />
            <p>Virat Kohli is the Num. One Batsman in T-20.</p>
            <img
              width= "100%"
              className="card-img-top"
              src="https://www.jainuniversity.ac.in/application/themes/events/assets/images/prospective-student/kl-rahul.jpg"
              alt="Card image cap"
            />
            <p>K L Rahul is the Num. One Batsman in T-20.</p>
        </div>
      </div>
      <div style={{width:"49%"}}>
        <div className="card-group">
          <div className="card p-2">
            <img
              width= "100%"
              className="card-img-top"
              src="https://resources.pulse.icc-cricket.com/ICC/photo/2019/11/08/2ae4173a-9e9a-4aaf-932e-7a4559235a78/Rohit-Sharma-2-.jpg"
              alt="Card image cap"
            />
            <div className="card-body" style={{ textAlign: "left" }}>
              <h5 className="card-title">
                LIVE / Pope, Lees raise half-century stand
              </h5>
              <p className="card-text">
                Earlier, Rohit Sharma 190 powered New Zealand to 553
              </p>
              <div style={{ backgroundColor: "#e3e4e4", width: "80%" ,padding:"3px" }}>
                <p>IND 120-1(23)</p>
                <p>SA</p>
                <p style={{ color: "red" }}>
                  Day-2: 3rd Session - INDIA trail by 225.
                </p>
              </div>
              <p>Day 2 / As it happened</p>
              <p>
                Day 2 Tea / Mitchell piles on the runs in rain-affected session
              </p>

              <p>AUSTRALIA TOUR OF SRI LANKA, 2022</p>
              <img
                width= "100%"
                className="card-img-top"
                src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1561096160/1561096159.jpg"
              />
                 <h5 className="card-title">
                 Virat Kohli: Virat Kohli is an extraordinary player of the Indian cricket crew. 
              </h5>
              <h5 className="card-title">
               Virat kohli is kig of Cricket in the World.
              </h5>
            </div>
          </div>
        </div>
     

      </div>
      <div className="ml-2">
      <ReactPlayer width="100%" height="32%" className="my-2"url="https://youtu.be/dAGpdIMeM0Q"/>
      <ReactPlayer width="100%" height="32%"  className="my-2"url="https://youtu.be/kz96aa36aWs"/>
      <ReactPlayer width="100%" height="32%" url="https://youtu.be/GIZWcg8gvwM"/>
      </div>
    </div>
  );
};

export default LatestNews;

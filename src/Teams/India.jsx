import React from "react";

import Navbar from "../Navbar/Navbar";
import Navbarbelow from "../Navbarbelow/Navbarbelow";

const India = () => {
  return (
    <div>
      <Navbar />
      <Navbarbelow />

      {/* ---Indian National Cricket Team*/}
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          textAlign: "left",
          paddingTop: "10px",
        }}
      >
        <h3 style={{ marginLeft: "10px" }}>India National Cricket Team</h3>
        <div
          style={{
            marginLeft: "10px",
            display: "flex",
            gap: "19px",
            color: "green",
           
          }}
        >
          <p>Home</p>
          <p>Schedule</p>
          <p>Result</p>
          <p>News</p>
          <p>Videos</p>
          <p>Photo</p>
          <p>Stats</p>
          <p>Players</p>
        </div>
        <hr style={{ marginTop: "5px", marginLeft: "10px" }} />

        {/* ---Indian National Cricket Team*/}

        <div>
          <h3 style={{ marginLeft: "15px", display: "flex" }}>Top Stories</h3>
          
        <div style={{ display: "flex", gap: "17px" }}>
            <img
              style={{
                borderRadius: "8px",
                marginLeft: "15px",
                height: "180px",
                width: "230px",
              }}
              src="https://www.cricbuzz.com/a/img/v1/205x152/i1/c235864/cms-img.jpg"
            />
            <div>
              <h5>
                Hard to hit: How Test specialists are <br></br>turning over a
                new leaf in T20 bowling
              </h5>
              <p>
                The latest answer to counter batting domination was <br></br>
                always right in front of our eyes. But why has it come to{" "}
                <br></br> the forefront now?
              </p>
            </div>

            {/* -----Second Column */}
           <div style={{marginLeft:"110px",paddingBottom:"20px"}}>
           <h5
            style={{ color: "#217867", paddingTop: "-55px", marginLeft: "15px" }}
          >
            MATCHES
          </h5>
          <p style={{ marginLeft: "15px" }}>3rd T20I, Visakhapatnam</p>
          <div style={{ display: "flex", marginLeft: "15px", gap: "115px" }}>
            <p>IND</p>
            <p>179-5</p>
          </div>
          <div style={{ display: "flex", marginLeft: "15px", gap: "115px" }}>
            <p>RSA</p>
            <p>131</p>
          </div>
          <p style={{ marginLeft: "15px",color:"blue" }}>India won by 48 runs</p>

           </div>
         
            {/* -----Second Column */}


          </div>
        </div>
        <hr />
        <div>
          <div style={{ display: "flex", gap: "17px", marginTop: "15px" }}>
            <img
              style={{
                borderRadius: "8px",
                marginLeft: "15px",
                height: "180px",
                width: "230px",
                marginTop: "15px",
              }}
              src="https://www.cricbuzz.com/a/img/v1/205x152/i1/c235853/cms-img.jpg"
            />
            <div style={{ marginTop: "15px" }}>
              <h5>
                Shitanshu Kotak, Sairaj Bahutule to be part of<br></br>Laxman's
                support staff
              </h5>
              <p>
                VVS Laxman will serve as the head coach during India's short{" "}
                <br></br>
                Series in Ireland
              </p>
              <p>Jun 13 2022</p>
              
            </div>

              {/* -----Second Column */}
           <div style={{marginLeft:"80px",paddingBottom:"20px"}}>
          
          <p style={{ marginLeft: "15px" }}>4th T20I, Rajkot</p>
          
            <p style={{ marginLeft: "15px" }}>IND</p>
            <p style={{ marginLeft: "15px" }}>RSA</p>
           
          
          <p style={{ marginLeft: "15px",color:"brown" }}>Fri, 17 Jun 13:30 GMT</p>

           </div>
         
            {/* -----Second Column */}

          </div>
        </div>
        <hr></hr>
       
        <div style={{ display: "flex", gap: "17px", marginTop: "15px" }}>
            <img
              style={{
                borderRadius: "8px",
                marginLeft: "15px",
                height: "180px",
                width: "230px",
                marginTop: "15px",
              }}
              src="https://www.cricbuzz.com/a/img/v1/205x152/i1/c235839/cms-img.jpg"
            />
            <div style={{ marginTop: "15px" }}>
              <h5>India fall for traps on a tough batting night.</h5>
              <p>
                South African bowlers maximised the friendly conditions,
                <br></br> catching India short on batting application and a
                crucial few runs
              </p>
              <p>Jun 13 2022</p>
            </div>

            
              {/* -----Second Column */}
           <div style={{marginLeft:"58px",paddingBottom:"20px"}}>
          
          <p style={{ marginLeft: "15px" }}>5th T20I, Bengaluru</p>
         
            <p style={{ marginLeft: "15px" }}>IND</p>
            <p style={{ marginLeft: "15px" }}>RSA</p>
            
          
          <p style={{ marginLeft: "15px",color:"brown" }}>Fri, 24 Jun 10:00 GMT</p>

           </div>
         
            {/* -----Second Column */}
        </div>
        
      </div>
      
    </div>

  );
};

export default India;

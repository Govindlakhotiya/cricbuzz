import React,{useState} from "react";
import {useNavigate} from "react-router";

const Signup = () => {
    var signupArr = JSON.parse(localStorage.getItem("signup")) || [];

    const [signupform, setsignupform] = useState({ 
        email: "", 
        password: "", 
      });

      const handform = (e) => { 
        let { name, value } = e.target; 
        setsignupform({ ...signupform, [name]: value }); 
      };

      const handlesub = (e) => { 
        e.preventDefault(); 
        signupArr.push(signupform); 
        localStorage.setItem("signup", JSON.stringify(signupArr)); 
        navigate("/login"); 
        console.log(signupform)
      };


    const navigate=useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <img height="35px" src="https://www.cricbuzz.com/images/cb_logo.svg" />
      </nav>
       
      <div style={{ backgroundColor: "white", height: "550px",marginTop:"10px" }}>
       
          <div style={{ display: "flex",paddingTop:"20px" }}>
          <div style={{ display: "flex"}}>
            <p style={{marginLeft:"10px"}}>Home</p>
            <p>></p>

        
            <p> <b>Account</b> </p>
            </div>
            <div style={{ marginLeft: "78%", marginbottom: "40px" }}>
              <img
                height="35px"
                src="https://www.cricbuzz.com/images/cb_logo_plus_color.svg"
              />
            </div>
            
          </div>
        
      <hr></hr>
        <div>
          <h3>Signup</h3>
         

          <label  style={{width:"80px"}}>Email:- </label>

          <input
            type="Email"
            placeholder="Enter your mail.." onChange={handform}  name="email" value={signupform.email} 
            style={{  width: "25%", height: "25px" }}
        /><br></br>
          
          <label style={{width:"80px"}}>Password:- </label>
          <input
            type="Password" onChange={handform} name="password"  value={signupform.password} placeholder="Enter your password.."
            style={{  width: "25%", height: "25px" }} />

        </div>
        <br />
        <div style={{ textAlign: "center", marginLeft: "100px" }}>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">
            {" "}
            I agree with the Terms of Use and Privacy Policy of Cricbuzz
          </label>
          <br />
          <button
            style={{
              borderRadius: "12px",
              width: "30%",
              height: "35px",
              marginright: "60px",
              backgroundcolor: "pink",
              color: "black",
            }}
            onClick={ handlesub}
          >
            Signup
          </button>

        </div>
      </div>
    </div>
  );
};

export default Signup;

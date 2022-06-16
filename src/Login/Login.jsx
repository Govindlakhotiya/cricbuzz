import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };

  var signupArr = JSON.parse(localStorage.getItem("signup"));

  const [loginform, setloginform] = useState({
    email: "",
    password: "",
  });

  const handchange = (e) => {
    const { name, value } = e.target;
    setloginform({ ...loginform, [name]: value });
  };

  const loginhandle = (e) => {
    e.preventDefault();
    console.log("Govind");
    for (var i = 0; i < signupArr.length; i++) {
      if (
        loginform.email === signupArr[i].email &&
        loginform.password === signupArr[i].password
      ) {
        alert("Login Success !........");
        navigate("/");
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <img height="35px" src="https://www.cricbuzz.com/images/cb_logo.svg" />
      </nav>

      <div style={{ backgroundColor: "white", height: "550px", marginTop: "10px" }}>
        <div style={{ display: "flex", paddingTop: "20px" }}>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: "10px" }}>Home</p>
            <p>></p>

            <p>
              {" "}
              <b>Account</b>{" "}
            </p>
          </div>
          <div style={{ marginLeft: "78%", marginbottom: "40px" }}>
            <img
              height="35px"
              src="https://www.cricbuzz.com/images/cb_logo_plus_color.svg"
            />
          </div>
        </div>

        <hr></hr>

        <h3>Login</h3>
        <form onSubmit={loginhandle}>
        <div>
          <label style={{ width: "80px" }}>Email:- </label>
          <input
            type="Email"  name="email"
            value={loginform.email}
            onChange={handchange}
            placeholder="Enter your mail.."
            style={{ width: "25%", height: "25px" }}
          />
          <br></br>

          <label style={{ width: "80px" }}>Password:- </label>
          <input
            type="Password"
            name="password"
            value={loginform.password}
            onChange={handchange}
            placeholder="Enter your password.."
            style={{ width: "25%", height: "25px" }}
          />
        </div>

        <br />
        <div style={{ textAlign: "center", marginLeft: "100px" }}>
          <input type="checkbox" />
          <label for="vehicle1">
            {" "}
            I agree with the Terms of Use and Privacy Policy of Cricbuzz{" "}
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
           type="submit"
          >
            Login
          </button>
          </div>
          </form>
          <div>
          <p>
            If Already Not registerd ->{" "}
            <a
              onClick={handleClick}
              style={{ textDecoration: "underline", color: "blue" }}
            >
              Click here
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

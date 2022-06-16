import React from "react";
import {Link,useNavigate} from 'react-router-dom';
const Navbar = () => {

  const navigate=useNavigate();

  const Govind=()=>{
  navigate("/India")

  }
  return (
<div >
<nav className="navbar navbar-expand-lg navbar-light ">
<img height="35px" src="https://www.cricbuzz.com/images/cb_logo.svg"/>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav m-auto ">
      <li className="nav-item active">
        <a className="nav-link text-light  text-right" href="#">Live Score <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Schedule</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Archives</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         News
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">All Stories</a>
          <a className="dropdown-item" href="#">Cricbuzz Plus</a>
          <a className="dropdown-item" href="#">Latest News</a>
          <a className="dropdown-item" href="#">Topics</a>
          <a className="dropdown-item" href="#">Spotlight</a>
          <a className="dropdown-item" href="#">Opinions</a>
          <a className="dropdown-item" href="#">Specials</a>
          <a className="dropdown-item" href="#">Stats & Analysis</a>
          <a className="dropdown-item" href="#">Interviews</a>
          <a className="dropdown-item" href="#">Live Blog</a>
          <a className="dropdown-item" href="#">Harsh Bhogle</a>
         
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Series
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">South Africa tour of India,2022</a>
          <a className="dropdown-item" href="#">West Indies tour of Pakisthan,2021-22</a>
          <a className="dropdown-item" href="#">New Zealand tour of England,2022</a>
          <a className="dropdown-item" href="#">Australia tour of Sri Lanka,2022</a>
          <a className="dropdown-item" href="#">T20 Blast 2022</a>
          <a className="dropdown-item" href="#">Ranji Trophy 2021-22</a>
          <a className="dropdown-item" href="#">Country Champioship Division One 2022</a>
          <a className="dropdown-item" href="#">ICC Cricket World Cup League Two 2019-23</a>
          <a className="dropdown-item text-primary" href="https://www.cricbuzz.com/cricket-schedule/series">All Series</a>
          
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Teams
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <h5>TEST TEAMS</h5>
          <a className="dropdown-item" onClick={Govind} href="#">India</a>
          <a className="dropdown-item" href="#">Ireland</a>
          <a className="dropdown-item" href="#">Pakistan</a>
          <a className="dropdown-item" href="#">Australia</a>
          <a className="dropdown-item" href="#">Sri Lanka</a>
          <a className="dropdown-item" href="#">Ranji Trophy 2021-22</a>
          <a className="dropdown-item" href="#">Bandladesh</a>
          <a className="dropdown-item" href="#">England</a>
          <a className="dropdown-item " href="">West Indies</a>
          <a className="dropdown-item " href="">South Africa</a>
          <a className="dropdown-item " href="">New Zeland</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Video
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">All Videos</a>
          <a className="dropdown-item" href="#">Categories</a>
          <a className="dropdown-item" href="#">Playlists</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Ranking
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">ICC RANKING-Men</a>
          <a className="dropdown-item" href="#">ICC RANKING-Women</a>
         
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      More
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">World Test Champioship </a>
          <a className="dropdown-item" href="#">World Cup Super League</a>
          <a className="dropdown-item" href="#">Quiz</a>
          <a className="dropdown-item" href="#">Photo</a>
          <a className="dropdown-item" href="#">Mobile App</a>
          <a className="dropdown-item" href="#">Careers</a>
          <a className="dropdown-item" href="#">Contact</a>
         
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-1 rounded-pill " style={{width:"130px"}}  type="search" placeholder="Cricbuzz Plus" aria-label=""/>
      </form>
      <i className="fa-solid fa-magnifying-glass text-white mx-1"></i>
      <Link to ="/login" ><i className="fas fa-user text-white mx-2"></i> </Link>
  </div>
</nav>
    </div>
  );
};

export default Navbar;

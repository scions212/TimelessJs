import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/imagenes/logo.png";
import React,{useState, useEffect} from "react";

//import document from "react-dom";

const Navbar = () => {

const [click, setClick ] =useState(false);
const [button, setButton] = useState(true);
const [navbar,setNavbar] =useState(false);

const handleClick = () =>setClick(!click);
const closeMobileMenu = () =>setClick(false);

const showButton=() =>{
  if (window.innerWidth <=960){
    setButton(false);
  }else{
    setButton(true);
  }
};

useEffect(() =>{
  showButton()
  window.addEventListener('scroll',changeBackground);
},[]);
//window.addEventListener('resize',showButton);

const changeBackground = () =>{
  if(window.scrollY >= 80 ){
    setNavbar(true)
  }else{
    setNavbar(false)
  };
};


  return (
    <>
      <nav className= {navbar ? 'navbar active fixed-top navbar-expand-lg navbar-dark p-md-3 bgcolor' : 'navbar fixed-top navbar-expand-lg navbar-dark p-md-3 bgcolor'}>
      <div className="navbar-container"> 
        <a className="ml-auto">
          <Image src={Logo} className="Logo" alt="Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Implementaciones
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Firewall
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Servicios
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Partners
              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
/*
const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});*/

export default Navbar;

import Layout from "../components/Layout";
import Link from "next/link";
import React, { Component, useState, useEffect } from "react";
import Script from "next/script";

import Image from "next/image";
import image1 from "../public/imagenes/fibra-oscura.jpg";
import image2 from "../public/imagenes/codigo.jpg";
import image4 from "../public/imagenes/client.jpg";
import image3 from "../public/imagenes/firewall.jpg";


import CiberSeguridad from "../public/imagenes/CiberSeguridad.jpg";
import ciber from "../public/imagenes/ciber@6x.png";
import comunications from "../public/imagenes/comunications@6x.png";
import cloudM from "../public/imagenes/multi@6x.png";
import servers from "../public/imagenes/oracle@6x.png";
import iot from "../public/imagenes/iot@6x.png";

import { projects } from "../profile";

const Index = () => {

  const [click, setClick ] =useState(false);
  const [button, setButton] = useState(true);

const handleClick = () =>setClick(!click);


const showButton=() =>{
  if (window.innerWidth <=960){
    setButton(false);
  }else{
    setButton(true);
  }
};


useEffect(() =>{
  showButton()
  window.addEventListener('onClick',imageModal1);
  window.addEventListener('onClick',imageModal2);
  window.addEventListener('onClick',imageModal3);
  window.addEventListener('onClick',imageModal4);
  window.addEventListener('onClick',imageModal5);
},[]);
//window.addEventListener('resize',showButton);

const imageModal1 = () =>{
    document.getElementById("contentInfo01").addEventListener("click", function(){
      var aprobacion;
      if(aprobacion){
        console.log("boton 1" + aprobacion)
          setButton(true);
        }else{
          setButton(false)
          aprobacion=false;
      };
    });
  };

const imageModal2 = () =>{
  document.getElementById("contentInfo02").addEventListener("click", function(){
      var aprobacion = true;
      if(aprobacion == true){
        console.log("boton 2" + aprobacion)
          setButton(true);
        }else{
          setButton(false)
          aprobacion=false;
      };
    });
  };

 const imageModal3 = () =>{
  document.getElementById("contentInfo03").addEventListener("click", function(){
    var aprobacion = true;
    if(aprobacion == true){
        console.log("boton 3" + aprobacion)
        setButton(true);
        }else{
          setButton(false)
          aprobacion=false;
      };
    });
  };

 const imageModal4 = () =>{
  document.getElementById("contentInfo04").addEventListener("click", function(){
    var aprobacion = true;
    if(aprobacion == true){
      console.log("boton 4" + aprobacion)
        setButton(true);
        }else{
          aprobacion=false;
          setButton(false)
      };
    });
  };

 const imageModal5 = () =>{
  document.getElementById("contentInfo05").addEventListener("click", function(){
    var aprobacion = true;
    if(aprobacion == true){
      console.log("boton 5" + aprobacion)
        setButton(true);       
        }else{
          setButton(false)
      };
    });
  };

  //window.addEventListener("scroll", changeBackground);
  return (
    <> 
      <Layout description="Servicios Informaticos">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"/>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />
        <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        ></link>

        <div className="container-marketing">
          <div className="row">
            <br />
            <div className="col-lg-4">
              <div id="image5"></div>
              <h2>Conexion</h2>
              <p>
                <a className="button button--darken" href="#">
                  View details &raquo;
                </a>
              </p>
            </div>

            <div className="col-lg-4">
              <div id="image4"></div>
              <h2>Firewall</h2>
              <p>
                <a className="button button--darken" href="#">
                  View details &raquo;
                </a>
              </p>
            </div>

            <div className="col-lg-4">
              <div id="image6"></div>
              <h2>Servidores</h2>
              <p>
                <a className="button button--darken" href="#">
                  View details &raquo;
                </a>
              </p>
            </div>
          </div>
          <br />
          <br />
          <hr className="featurette-divider" />

          <section className="services services--block">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">

                  <h2 className="services__title services__title--light">
                    Nuestros Servicios
                  </h2>

                </div>
              </div>

              <div className="row">
                <div className="col-xl-10 offset-xl-1 col-12">
                  <div className="services-panel">
                    <ul className="services-panel__list">

                  <li id="contentInfo01"  className= {imageModal1 ? 'services-panel__item active' :"services-panel__item"}>
                  <button onClick={imageModal1}>
                    <img loading="lazy" className="image" src="imagenes/multi@6x.png" alt="Ciberseguridad" data-target="#contentInfo01Modal"></img>
                    <span className="services-panel__name">Cloud H??brida</span>
                    
                    </button>
                  </li>
                  
                  <li id="contentInfo02"  className= {imageModal2 ? 'services-panel__item active' :"services-panel__item"}>
                  <button onClick={imageModal2}>
                    <img loading="lazy" className="image" src="imagenes/comunications@6x.png"  alt="Ciberseguridad" data-target="#contentInfo02Modal" ></img>
                    <span className="services-panel__name">Ciberseguridad</span>
                    </button>
                  </li>    
                  
                  <li id="contentInfo03"  className= {imageModal3 ? 'services-panel__item active' :"services-panel__item"}>
                  <button onClick={imageModal3}>
                    <img loading="lazy" className="image" src="imagenes/oracle@6x.png" aria-hidden="true" alt="Optimizaci??n TI" data-target="#contentInfo03Modal">
                    </img>
                    <span className="services-panel__name">Optimizaci??n TI</span>
                    </button>
                  </li>    
                  
                  <li id="contentInfo04"  className= {imageModal4 ? 'services-panel__item active' :"services-panel__item"}>
                  <button onClick={imageModal4}>
                    <img loading="lazy" className="image" src="imagenes/iot@6x.png"   alt="IoT Analytics" data-target="#contentInfo04Modal"></img>
                    <span className="services-panel__name">IoT Analytics</span>
                    </button>
                  </li>    
                  
                  <li id="contentInfo05"  className= {imageModal5 ? 'services-panel__item active' :"services-panel__item"}>
                  <button onClick={imageModal5}>
                    <img loading="lazy" className="image" src="imagenes/ciber@6x.png"  alt="Comunicaciones Convergentes" data-target="#contentInfo05Modal"></img>
                    <span className="services-panel__name">Comunicaciones Convergentes</span>
                    </button>
                  </li>  

                  </ul>
                    <div
                      id="contentInfo01Modal"
                       className= {imageModal1 ? 'services-panel__content open' :"services-panel__content--close"}>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <img
                            loading="lazy"
                            className="services-panel__image"
                            src="/imagenes/cloud.jpg"
                            width="450px"
                            height="350px"
                            alt="Cloud H??brida"
                            
                          />
                        </div>
                        <div className="col-lg-6">
                          <div className="services-panel__description">
                            <h1 className="services-panel__title">
                              Cloud H??brida
                            </h1>
                            <p className="services-panel__text">
                              Oferta de servicio de cloud privada, p??blica e
                              h??brida, que le permite acceder a un cat??logo de
                              servicios estandarizados en la nube y responder a
                              las necesidades del negocio de manera r??pida,
                              flexible y adaptativa; atendiendo demandas no
                              previsibles o peaks de trabajo, costeando
                              ??nicamente la capacidad asignada o utilizada.
                            </p>
                            <a className="button" href="#">
                              Leer m??s
                            </a>
                            <a className="button button--darken" href="#">
                              Ver todos los servicios
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="contentInfo02Modal"
                        className= {imageModal2 ? 'services-panel__content--close' :"services-panel__content open"}>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <Image
                            loading="lazy"
                            className="services-panel__image"
                            src="/imagenes/CiberSeguridad.jpg"
                            width="450px"
                            height="350px"
                            alt="Ciberseguridad"
                          />
                        </div>
                        <div className="col-lg-6">
                          <div className="services-panel__description ">
                            <h1 className="services-panel__title">
                              Ciberseguridad
                            </h1>
                            <p className="services-panel__text">
                              Servicio de acompa??amiento continuo, que parte con
                              la evaluaci??n de riesgos del negocio, continua con
                              la priorizaci??n e implementaci??n de proyectos de
                              mitigaci??n y termina con servicios gestionados de
                              ciberseguridad. Privilegiamos las soluciones de
                              protecci??n desde la nube, tanto para los centros
                              de datos y sucursales como para los usuarios
                              finales
                            </p>
                            <a className="button" href="#">
                              Leer m??s
                            </a>
                            <a className="button button--darken" href="#">
                              Ver todos los servicios
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                    id="contentInfo03Modal"
                    className= {imageModal3 ? 'services-panel__content--close' :"services-panel__content open"}>
                      
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <Image
                            loading="lazy"
                            className="services-panel__image"
                            src={image3}
                            width="450px"
                            height="350px"
                            alt="Optimizaci??n TI"
                          />
                        </div>
                        <div className="col-lg-6">
                          <div className="services-panel__description">
                            <h1 className="services-panel__title">
                              Optimizaci??n TI
                            </h1>
                            <p className="services-panel__text">
                              Servicio agn??stico que le permite obtener una
                              visi??n 360 de su plataforma actual y le guiar?? en
                              la incorporaci??n de arquitecturas y plataformas
                              orientadas a la continuidad operacional y la
                              reducci??n de costos. El porfolio de este servicio
                              se fundamenta en dos tipos de assessment IT
                              Modernization y Migraci??n y Modernizaci??n de
                              Aplicaciones.
                            </p>
                            <a className="button" href="#">
                              Leer m??s
                            </a>
                            <a className="button button--darken" href="#">
                              Ver todos los servicios
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="contentInfo04Modal"
                      className= {imageModal4 ? 'services-panel__content--close' :"services-panel__content open"}>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <img
                            loading="lazy"
                            className="services-panel__image"
                            src="/imagenes/client.jpg"
                            width="450px"
                            height="350px"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6">
                          <div className="services-panel__description">
                            <h1 className="services-panel__title">
                              IoT Analytics
                            </h1>
                            <p className="services-panel__text">
                              Estrategia consultiva para el desarrollo de
                              soluciones basada en el an??lisis de grandes
                              cantidades de datos, utilizando sensores f??sicos y
                              virtuales, para apoyar la toma de decisiones en
                              las ??reas neur??lgicas del negocio. Este servicio
                              permite entregar soluciones de IoT y Anal??tica
                              inteligente a todos los sectores de la actividad
                              econ??mica.
                            </p>
                            <a className="button" href="#">
                              Leer m??s
                            </a>
                            <a className="button button--darken" href="#">
                              Ver todos los servicios
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="contentInfo0Modal"
                      className= {imageModal1 ? 'services-panel__content--close' :"services-panel__content open"}>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <img
                            loading="lazy"
                            className="services-panel__image"
                            src="/imagenes/firewall.jpg"
                            width="450px"
                            height="350px"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6">
                          <div className="services-panel__description">
                            <h1 className="services-panel__title">
                              Comunicaciones Convergentes
                            </h1>
                            <p className="services-panel__text">
                              Modelo evolutivo de redes y conectividad, que
                              integra m??ltiples soluciones tecnol??gicas para
                              optimizar la experiencia comunicacional de los
                              usuarios y atender las necesidades de su negocio.
                              Ofrecemos, bajo un mismo modelo de gesti??n y
                              operaci??n, nuestras capacidades en redes
                              industriales, colaboraci??n unificada,
                              videovigilancia centralizada, entre otras.
                            </p>
                            <a className="button" href="#">
                              Leer m??s
                            </a>
                            <a className="button button--darken" href="#">
                              Ver todos los servicios
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                <b>??Que es Ciber seguridad? </b>{" "}
                <span className="text-muted">
                  <b> Todo lo que deberias saber...</b>
                </span>
              </h2>
              <p className="lead">
                La seguridad inform??tica, tambi??n conocida como ciberseguridad o
                seguridad de tecnolog??a de la informaci??n, ??? es el ??rea
                relacionada con la inform??tica y la telem??tica que se enfoca en
                la protecci??n de la...
              </p>
            </div>
            <div className="col-md-5">
              <div id="image1"></div>
            </div>
          </div>

          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                <b>Seguridad de TLS y SSL. </b>
                <span className="text-muted">
                  <b>Manten tu correo seguro.</b>
                </span>
              </h2>
              <p className="lead">
                Seguridad de la capa de transporte y su antecesor Secure Sockets
                Layer son protocolos criptogr??ficos, que proporcionan
                comunicaciones seguras por una red, com??nmente Internet.???..
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <div id="image2"></div>
            </div>
          </div>
          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                <b>Servicios Cloud. </b>
                <span className="text-muted">
                  <b>Tu informacion siempre respaldada.</b>
                </span>
              </h2>
              <p className="lead">
                La computaci??n en la nube, ??? conocida tambi??n como servicios en
                la nube, inform??tica en la nube, nube de c??mputo o simplemente
                ??la nube??, es un paradigma que permite ofrecer servicios de
                computaci??n a trav??s de una red, que usualmente es internet...
              </p>
            </div>
            <div className="col-md-5">
              <div id="image3"></div>
            </div>
          </div>
          <hr className="featurette-divider" />

          <section>
            <br />
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-md-12">
                <div className="card card-body bg-dark">
                  <div className="row">
                    <div className="col-md-12 my-2">
                      <h1 className="text-center text-light">
                        Se parte de la Familia Timeless Support
                      </h1>
                    </div>
                    {projects.map(({ name, description, image }, index) => (
                      <div className="col-md-4 p-2" key={index}>
                        <div className="card">
                          <div className="overflow">
                            <img
                              src={`/${image}`}
                              alt=""
                              div
                              className="card-img-top"
                            />
                          </div>
                          <div className="card-body text-center Justify-content">
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <a className="button button--darken" href="#">
                              Nuestros Partners
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
        </div>
      </Layout>
    </>
  );
}

export default Index;

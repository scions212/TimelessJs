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
 if(document.getElementById("contentInfo01").addEventListener("click", function() {
  })){
    setNavbar(true)
  }else{
    setNavbar(false)
    };
  }};

const imageModal2 = () =>{
  alert("Aqui se deberia ver la imagen 2")
 };
 const imageModal3 = () =>{
  alert("Aqui se deberia ver la imagen 3")
 };

 const imageModal4 = () =>{
  alert("Aqui se deberia ver la imagen 4")
 };

 const imageModal5 = () =>{
  alert("Aqui se deberia ver la imagen 5")
 };
 

  //window.addEventListener("scroll", changeBackground);
  return (
    <> 
      <Layout description="Servicios Informaticos">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
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
                    <span className="services-panel__name">Cloud Híbrida</span>
                    
                    </button>
                  </li>
                  
                  <li id="contentInfo02" className="services-panel__item">
                  <button onClick={imageModal2}>
                    <img loading="lazy" className="image" src="imagenes/comunications@6x.png"  alt="Ciberseguridad" data-target="#contentInfo02Modal" ></img>
                    <span className="services-panel__name">Ciberseguridad</span>
                    </button>
                  </li>    
                  
                  <li id="contentInfo03" className="services-panel__item">
                  <button onClick={imageModal3}>
                    <img loading="lazy" className="image" src="imagenes/oracle@6x.png" aria-hidden="true" alt="Optimización TI" data-target="#contentInfo03Modal">
                    </img>
                    <span className="services-panel__name">Optimización TI</span>
                    </button>
                  </li>    
                  
                  <li id="contentInfo04" className="services-panel__item">
                  <button onClick={imageModal4}>
                    <img loading="lazy" className="image" src="imagenes/iot@6x.png"   alt="IoT Analytics" data-target="#contentInfo04Modal"></img>
                    <span className="services-panel__name">IoT Analytics</span>
                    </button>
                  </li>    
                  
                  <li id="contentInfo05" className="services-panel__item">
                  <button onClick={imageModal5}>
                    <img loading="lazy" className="image" src="imagenes/ciber@6x.png"  alt="Comunicaciones Convergentes" data-target="#contentInfo05Modal"></img>
                    <span className="services-panel__name">Comunicaciones Convergentes</span>
                    </button>
                  </li>  

                  </ul>
                    <div
                      id="contentInfo01Modal"
                      className="services-panel__content open" >

                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <img
                            loading="lazy"
                            className="services-panel__image"
                            src="/imagenes/cloud.jpg"
                            width="450px"
                            height="350px"
                            alt="Cloud Híbrida"
                            
                          />
                        </div>
                        <div className="col-lg-6">
                          <div className="services-panel__description">
                            <h1 className="services-panel__title">
                              Cloud Híbrida
                            </h1>
                            <p className="services-panel__text">
                              Oferta de servicio de cloud privada, pública e
                              híbrida, que le permite acceder a un catálogo de
                              servicios estandarizados en la nube y responder a
                              las necesidades del negocio de manera rápida,
                              flexible y adaptativa; atendiendo demandas no
                              previsibles o peaks de trabajo, costeando
                              únicamente la capacidad asignada o utilizada.
                            </p>
                            <a className="button" href="#">
                              Leer más
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
                      className="services-panel__content services-panel__content--close"
                    >
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
                              Servicio de acompañamiento continuo, que parte con
                              la evaluación de riesgos del negocio, continua con
                              la priorización e implementación de proyectos de
                              mitigación y termina con servicios gestionados de
                              ciberseguridad. Privilegiamos las soluciones de
                              protección desde la nube, tanto para los centros
                              de datos y sucursales como para los usuarios
                              finales
                            </p>
                            <a className="button" href="#">
                              Leer más
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
                      className="services-panel__content open services-panel__content--close"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <Image
                            loading="lazy"
                            className="services-panel__image"
                            src={image3}
                            width="450px"
                            height="350px"
                            alt="Optimización TI"
                          />
                        </div>
                        <div className="col-lg-6">
                          <div className="services-panel__description">
                            <h1 className="services-panel__title">
                              Optimización TI
                            </h1>
                            <p className="services-panel__text">
                              Servicio agnóstico que le permite obtener una
                              visión 360 de su plataforma actual y le guiará en
                              la incorporación de arquitecturas y plataformas
                              orientadas a la continuidad operacional y la
                              reducción de costos. El porfolio de este servicio
                              se fundamenta en dos tipos de assessment IT
                              Modernization y Migración y Modernización de
                              Aplicaciones.
                            </p>
                            <a className="button" href="#">
                              Leer más
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
                      className="services-panel__content services-panel__content--close"
                    >
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
                              soluciones basada en el análisis de grandes
                              cantidades de datos, utilizando sensores físicos y
                              virtuales, para apoyar la toma de decisiones en
                              las áreas neurálgicas del negocio. Este servicio
                              permite entregar soluciones de IoT y Analítica
                              inteligente a todos los sectores de la actividad
                              económica.
                            </p>
                            <a className="button" href="#">
                              Leer más
                            </a>
                            <a className="button button--darken" href="#">
                              Ver todos los servicios
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="contentInfo05Modal"
                      className="services-panel__content services-panel__content--close"
                    >
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
                              integra múltiples soluciones tecnológicas para
                              optimizar la experiencia comunicacional de los
                              usuarios y atender las necesidades de su negocio.
                              Ofrecemos, bajo un mismo modelo de gestión y
                              operación, nuestras capacidades en redes
                              industriales, colaboración unificada,
                              videovigilancia centralizada, entre otras.
                            </p>
                            <a className="button" href="#">
                              Leer más
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
                <b>¿Que es Ciber seguridad? </b>{" "}
                <span className="text-muted">
                  <b> Todo lo que deberias saber...</b>
                </span>
              </h2>
              <p className="lead">
                La seguridad informática, también conocida como ciberseguridad o
                seguridad de tecnología de la información, ​ es el área
                relacionada con la informática y la telemática que se enfoca en
                la protección de la...
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
                Layer son protocolos criptográficos, que proporcionan
                comunicaciones seguras por una red, comúnmente Internet.​..
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
                La computación en la nube, ​ conocida también como servicios en
                la nube, informática en la nube, nube de cómputo o simplemente
                «la nube», es un paradigma que permite ofrecer servicios de
                computación a través de una red, que usualmente es internet...
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
};


export default Index;

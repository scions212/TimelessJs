import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
import classNames from "classnames";
import Script from 'next/script';

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
   
   <Script
  src="https://kit.fontawesome.com/d990f52718.js"
  strategy="beforeInteractive" // lazyOnload, afterInteractive
		/>
				<Navbar/>
		<div id="fondo" className="carousel slide" data-ride="carousel">
		
			<ol className="carousel-indicators">
				
				<li data-target="#fondo" data-slide-to="0"></li>
				<li data-target="#fondo" data-slide-to="1"></li>
				<li data-target="#fondo" data-slide-to="2"></li>
			</ol>
      </div>
 
      <Navbar />
      <main>
        {/* Title */}
        {title && (
          <h1 className={classNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}

        {/* Content */}
        {children}
        <br/>
      </main>
    
     
      <div className="container-footer">
      <br/>
        <Footer/>
    </div>
    </>
  );
 
};

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};

export default Layout;

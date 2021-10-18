
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="/about">About me</a></li>
                                <li><a href="/service">Our Services</a></li>
                                <li><a href="/deployment">Deployment</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Solutions</h4>
                            <ul>
                                <li><a href="/conection">Red</a></li>
                                <li><a href="/developer">Developer</a></li>
                                <li><a href="firewall">Firewall</a></li>
                                <li><a href="/ofimatica">Software</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Information</h4>
                            <ul>
                                <li><a href="/developer">Developer</a></li>
                                <li><a href="/firewall">Firewall</a></li>
                                <li><a href="/cloud">Cloud</a></li>
                                <li><a href="/ofimatica">Ofimatica</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Deployments</h4>
                            <ul>
                                <li><a href="https://gruporas.com/?page_id=8504">Plus Cargo</a></li>
                                <li><a href="#">Disco Centro</a></li>
                                <li><a href="http://www.vintagesoundperu.com/index.html">Vintage</a></li>
                                <li><a href="#">Euro Capital</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contacts</h4>
                            <ul>
                                <li><a href="#">Email</a></li>
                                <br />
                                <br />
                                <br />
                                <br />
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
										<div className="container-fluid">
										<div className="separador"></div>
										<Image src="/imagenes/peru.png" className="logo" width="50" height="50" />
										<small> Timeless Support </small>
											<p> <i className="fas fa-map-marked"></i> Direccion: Calle Schell 343 Oficina 201 - MIRAFLORES</p>
											<p> <i className="fas fa-phone-alt"> </i> Telefonos: +51 992 799 365 </p>
											<p>	<i className="far fa-envelope"> </i> Email: Soporte@timeless-it.com </p>
										</div>
                </div>	
					
            </footer>
        </> 
    )

}
export default Footer
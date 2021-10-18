import Layout from '../components/Layout';
import imagesoporte from "../public/imagenes/firewall2.jpg";
import Image from 'next/image'
const Firewall = () => {
	return (
		<Layout>
	<br />
	<br />
	<br />
	<div className="containerPage">
				<div className="containerFirewall">
				<h1 className="tituloFirewall d-flex justify-content-center">Firewall</h1>
					<div className="container"></div>
				</div>
			<br />
					
		<div className="parrafo">
			<p className="parrafos">En Timeless Support, Conocemos sobre la necesidad de matener la red de tu empresa protegida y asliada de todo tipo
			de Malware informatico que pueda perjudicar la productividad de tu empresa. por esa razón, contamos un profesionales en Firewall, capaces de
			asilar y proteger tu red mediante ataques informaticos como lo son Ransomware, Phishing, Troyanos, entre otros...
		</p>		
		</div>
				</div>	

		</Layout>
	)
}
export default Firewall
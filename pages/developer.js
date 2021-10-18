import Layout from '../components/Layout';
import imagesoporte from "../public/imagenes/soporte_informatico.jpg";
import Image from 'next/image'
const Developer = () => {
	return (
		<Layout>
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
					<div className="containerPage">
				<div className="containerDeveloper">
				<h1 className="tituloDeveloper d-flex justify-content-center">Desarrollo web</h1>
					<div className="container"></div>
				</div>
		<div className="parrafo">
		<p className="parrafos">Timeless Support presta un servicio 100% adecuado a las necesidades del cliente y en funcion a las buenas practicas documentadas.
		 La finalidad de nuestro trabajo es darle la mejor solucion y guiarte en la mejor opcion para tu empresa. 
		</p>

		<p  className="parrafos">
			Contamos con un amplio grupo de expertos en el area de Telecomunicaciones, Servidores, Bases de dato, Servidores, Analistas de sistemas, Servidores,
			dispuestos a complir con cada uno de tus requerimientos y solventar cualquier tipo de falla presentando dentro de tu empresa.
		</p>

		<p className="parrafos">
			Conviertete en parte de la familia Timeless Support y vive la mejor experiencia y un servicio de calidad para tu empresa
		</p>
		</div>
				</div>	

		</Layout>
	)
}
export default Developer;
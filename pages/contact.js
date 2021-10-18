import Layout from '../components/Layout';
import Image from 'next/image';

const Contact = () => {
	return (
		<Layout>
			<div className="flex-container">
				<div className="row">
					<form action="post" className="form">
						<div className="container-fluid">
							<h3>Consultas nuestros precios...<i className="fas fa-question"></i></h3>
						</div>

						<div className="form__section">
							<input type="text" className="form__input" id="Placeholder" placeholder="Nombres y Apellidos"/>
						</div>

						<div className="form__section">
						
							<input type="text" className="form__input" id="Placeholder" placeholder="Dirección"/>
						</div>

						<div className="form__section">

							<input type="text" className="form__input" id="Placeholder" placeholder="Servicios"/ >
						</div>

						<div className="form__section">
						
							<input type="text" className="form__input" id="Placeholder" placeholder="Teléfono"/>						
						</div>

						<div className="form__section">
						
							<input type="text" className="form__input" id="Placeholder" placeholder="Empresa"/>
						</div>

						<div className="form__section">
						
							<input type="text" className="form__input" id="Placeholder" placeholder="Email" />
						</div>

						<div className="form__section">
						
							<textarea type="text" className="form__input" id="Placeholder" placeholder="Requerimiento" rows="4"/>
						</div>

						<button type="submit" className="btn btn-primary">Enviar</button>

					</form>

					<div className="form-img">
						<div className="img-container">
							<div className="div">
								<Image src="/imagenes/logo.png" className="logo" width="360" height="90" />

								<h3> Somos Expertos y entendemos sus necesidades</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Contact
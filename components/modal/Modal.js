import React from 'react';
import {
	Modal, ModalHeader, ModalBody, ModalFooter,
	Button, FormGroup, Input, Label
} from 'reactstrap';
import './modal.css';

class ModalExample extends React.Component {

	state = {
		abierto: false,
	}

	abrirModal = () => {
		this.setState({ abierto: !this.state.abierto })
	}
	render() {

		const modalStyles = {
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)"
		}

		return (
			<div className="Principal">
				<div className="Secundario">
					<button color="success" onClick={this.abrirModal}>Mostrar Modal</button>
				</div>
			</div>
		);
	}
};

/*
<Modal isOpen={this.state.abierto} style={modalStyles}>
		<ModalHeader>
				Iniciar Sesion
		<ModalHeader/>
		<ModalBody>
				<FormGroup>
					  
						<Label for="usuario">Usuario<Label>
						<Input type="text" id="usuario"><Input/>

						<Label for="password">Password<Label>
						<Input type="password" id="password"><Input/>
				<FormGroup/>
		<ModalBody/>

		<ModalFooter>
				<Button><Button/>
				<Button color="primary">Registrarte Sesion<Button/>
				<Button color="secondary" onClick={this.abrirModal}>Cerrar Sesion<Button/>
		<ModalFooter/>
<Modal/>*/


export default ModalExample;
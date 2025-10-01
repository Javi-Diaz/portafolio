import "./ModalEnviarPropuesta.css"

function ModalEnviarPropuesta({mostrarModal}){
    return(
        <div className={`modal ${mostrarModal ? "modalAbierto" : ""}`}>
            <div className="box-p">
                <p>Tu propuesta ha sido enviada con exito.</p>
            </div>
            
        </div>
    )
}

export default ModalEnviarPropuesta;
import img from "../../assets/img.png"
import "./CardJavier.css"

function CardJavier(){
    return(
        <div className="card borde-hover" id="inicio">
            <div className="card-boxImg">
                <img className="card-img" src={img} alt="Imagen de Javier Diaz"/>
            </div>
            <h1 className="card-nombre">Javier Diaz</h1>
            <h2 className="card-cargo">Desarrollador web: Front-End</h2>
            <p>Buenos Aires, Argentina</p>
        </div>
    )

}

export default CardJavier;
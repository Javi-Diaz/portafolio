import "./SobreMi.css"
import { Link } from "react-router-dom";
import { FaGithub, FaWhatsapp, FaFileDownload } from "react-icons/fa";

function SobreMi(){
    return(
        <div className="sobremi-container" id="sobremi">
            <h3 className="sobremi-titulo">Sobre Mi</h3>
            <p className="sobremi-texto">Desarrollador Front-End Autodidacta, con
                sólidos conocimientos en HTML5, CSS3,
                JavaScript, React, y experiencia con
                Bootstrap, SASS, Flexbox, Media Queries
                (Mobile First) y diseño responsive.
                <br /><br />
                Manejo de control de versiones con Git y
                GitHub, integración de APIs REST usando
                Fetch y Axios (async/await).
                <br /><br />
                También cuento con nociones de SEO
                técnico básico y buenas prácticas en
                accesibilidad.
                <br /><br />
                Me destaco por ser resolutivo, adaptable y
                con una fuerte orientación al aprendizaje
                continuo.
                <br /><br />
                Actualmente busco seguir
                creciendo profesionalmente y aportar mis
                habilidades para el desarrollo de productos
                digitales de calidad.
            </p>

            <div className="sobremi-contactos">
                <Link className="sobremi-contacto" to="https://github.com/Javi-Diaz" target="_blank"><FaGithub/> Ver mi GitHub</Link>
                <Link className="sobremi-contacto" to="https://wa.me/541134903747" target="_blank"><FaWhatsapp/> Contactame</Link>
                <a className="sobremi-contacto" href="Curriculum-2025.pdf" download="Curriculum-2025.pdf"><FaFileDownload/> Descargar CV</a>
            </div>
            

        </div>
    )
}

export default SobreMi;
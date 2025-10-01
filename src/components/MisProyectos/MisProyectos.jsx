import { FaReact,FaHtml5, FaCss3Alt,FaJs, FaNodeJs, FaBootstrap, FaSass, FaArrowRight } from "react-icons/fa";
import reactshop from "../../assets/reactshop.png"
import repuestostnt from "../../assets/repuestostnt.png"
import bootstrap from "../../assets/bootstrap.png"
import sass from "../../assets/sass.png"
import tienda from "../../assets/tienda.png"
import "./MisProyectos.css"

function MisProyectos(){
    return(
        <div className="misProyectos-container" id="misproyectos">
            <h3 className="misProyectos-titulo">Mis Proyectos</h3>
            <a href="https://repuestostnt.com/" target="_blank">
                <div className="misProyectos-card borde-hover">
                    <img src={repuestostnt} alt="Foto del proyecto de Repuestos TNT" />
                    <div className="misProyectos-card-tecnologysBox">
                        <div className="misProyectos-card-tecnologyBox">
                            <FaHtml5 className="logo-html"/>
                            <p>HTML</p>
                        </div>
                        <div className="misProyectos-card-tecnologyBox">
                            <FaCss3Alt className="logo-css"/>
                            <p>CSS</p>
                        </div>
                        <div className="misProyectos-card-tecnologyBox">
                            <FaJs className="logo-js"/>
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="https://reactshop-flax.vercel.app/" target="_blank">
                <div className="misProyectos-card borde-hover">
                    <img src={reactshop} alt="Foto del proyecto de reactshop" />
                    <div className="misProyectos-card-tecnologysBox">
                        <div className="misProyectos-card-tecnologyBox">
                            <FaReact className="logo-react"/>
                            <p>React</p>
                        </div>
                        <div className="misProyectos-card-tecnologyBox">
                            <FaNodeJs className="logo-node"/>
                            <p>Node.js</p>
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="https://javi-diaz.github.io/scenery-web-page.github.io/" target="_blank">
                <div className="misProyectos-card borde-hover">
                    <img src={bootstrap} alt="Foto del proyecto de Bootstrap" />
                    <div className="misProyectos-card-tecnologysBox">
                        <div className="misProyectos-card-tecnologyBox">
                            <FaBootstrap className="logo-bootstrap"/>
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>
            </a>

            <a href="https://javi-diaz.github.io/practica-sass.github.io/" target="_blank">
                <div className="misProyectos-card borde-hover">
                    <img src={sass} alt="Foto del proyecto de Sass" />
                    <div className="misProyectos-card-tecnologysBox">
                        <div className="misProyectos-card-tecnologyBox">
                            <FaSass className="logo-sass"/>
                            <p>Sass</p>
                        </div>
                    </div>
                </div>
            </a>

            <a href="https://javi-diaz.github.io/tienda.github.io/" target="_blank">
                <div className="misProyectos-card borde-hover">
                    <img src={tienda} alt="Foto del proyecto de HTML,CSS y JS" />
                    <div className="misProyectos-card-tecnologysBox">
                        <div className="misProyectos-card-tecnologyBox">
                            <FaHtml5 className="logo-html"/>
                            <p>HTML</p>
                        </div>
                        <div className="misProyectos-card-tecnologyBox">
                            <FaCss3Alt className="logo-css"/>
                            <p>CSS</p>
                        </div>
                        <div className="misProyectos-card-tecnologyBox">
                            <FaJs className="logo-js"/>
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="https://github.com/Javi-Diaz?tab=repositories" className="misProyectos-verTodo" target="_blank">
                Ver todos los proyectos <FaArrowRight/>
            </a>
        </div>
    )
}

export default MisProyectos;
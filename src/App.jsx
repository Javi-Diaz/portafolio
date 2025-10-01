import Header from "./components/Header/Header"
import CardJavier from "./components/CardJavier/CardJavier"
import SobreMi from "./components/SobreMi/SobreMi"
import MisProyectos from "./components/MisProyectos/MisProyectos"
import Contacto from "./components/Contacto/Contacto"
import Final from "./components/Final/Final"
import { useState, useEffect } from "react"

function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(
        ".card, .sobremi-container, .misProyectos-container, .contacto-container"
      );

      let current = activeSection;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const middleScreen = window.innerHeight / 2;

        if (rect.top <= middleScreen && rect.bottom >= middleScreen) {
          if (sec.id === "sobremi") {
            current = "inicio";
          } else {
            current = sec.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // correr una vez al inicio

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <CardJavier/>
      <SobreMi/>
      <MisProyectos/>
      <Contacto/>
      <Final/>
    </>
  )
}

export default App

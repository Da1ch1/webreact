import React, { useState, useEffect } from 'react';
import Example from '../components/Example';
import Example2 from '../components/Example2';
import soldador1 from '../img/comida2.png';
import soldador2 from '../img/comida1.png';
import soldador3 from '../img/comida3.png';
import loadingImage from '../img/logo2.jpg'; // Asegúrate de que esta ruta sea correcta

const Inicio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const mensajeWhatsApp = "Hola, me gustaría obtener más información sobre los servicios de alimentos saludables para la escuela.";

  useEffect(() => {
    // Simular un tiempo de carga
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // 2 segundos de carga
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img src={loadingImage} alt="Cargando..." style={{ width: '200px', height: '200px' }} />
      </div>
    );
  }

  return (
    <div>
      <section id="intro">
        <div className="info">
          <h1>Cooperativa</h1>
          <h4>Esc. Toribio Manzano Ortega</h4>
          <p>
            Con un profundo compromiso con la salud y el bienestar de los niños, somos el equipo ideal para ofrecer alimentos saludables y deliciosos dentro de su escuela primaria. Nos dedicamos a combinar nutrición con sabor, asegurando que cada comida no solo sea nutritiva, sino también atractiva y apetecible para los estudiantes. Nuestra experiencia en este ámbito incluye una amplia variedad de opciones alimenticias, desde snacks saludables hasta comidas completas, siempre enfocadas en promover hábitos alimenticios que contribuyan al desarrollo integral de los niños.
            <br /><br />
          </p>
          <a 
            href={`https://wa.me/3337853953?text=${encodeURIComponent(mensajeWhatsApp)}`} 
            className="button explore" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Contáctanos
          </a>
        </div>
        <div className="split-beer">
          <img alt='' className="beer" src={soldador1} />
          <img alt='' className="beer" src={soldador2} />
          <img alt='' className="beer" src={soldador3} />
        </div>
      </section>
      <Example />
      <Example2 />
    </div>
  );
}

export default Inicio;

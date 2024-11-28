import React, { useState, useEffect } from 'react';
import loadingImage from '../img/logo2.jpg';

const Modal = ({ showModal, onClose, content }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
    }}>
      <div className="modal-content" style={{ 
        backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxWidth: '600px', 
        maxHeight: '80vh', overflowY: 'auto' // Hacer el contenido del modal desplazable
      }}>
        <button onClick={onClose} style={{ float: 'right', fontSize: '16px' }}>Cerrar</button>
        <h2>{content.name}</h2>
        <p>{content.description}</p>
        <div style={{ marginTop: '20px' }}>
          {content.products.map((product, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                style={{ width: '80%', height: 'auto', borderRadius: '8px', margin: '0 auto', display: 'block' }}
              />
              <h4 style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>{product.name}</h4>
              <p>{product.description}</p>
              {index < content.products.length - 1 && (
                <hr style={{ margin: '20px 0', border: '0', borderTop: '3px solid #ccc' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Catalogo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleClick = (content) => {
    setSelectedContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const callouts = [
    {
      name: 'Postres',
      description: 'Descubre los postres que tenemos para ti.',
      imageSrc: require('../img/postre.jpg'),
      imageAlt: 'Postre delicioso.',
      products: [
        {
          name: 'Fresas con crema',
          description: 'Deliciosas fresas frescas cubiertas con crema.',
          imageSrc: require('../img/fresas-con-crema.png'),
          imageAlt: 'Fresas con crema.',
        },
        {
          name: 'Subbananas',
          description: 'SubBananas cubiertas de chocolate con chispitas.',
          imageAlt: 'SubBananas.',
        },
      ]
    },
    {
      name: 'Bebidas',
      description: 'Encuentra la bebida para acompañar tus alimentos.',
      imageSrc: require('../img/bebidas.jpg'),
      imageAlt: 'Bebida refrescante.',
      products: [
        {
          name: 'Limonada',
          description: 'Refrescante limonada hecha con limones frescos.',
          imageAlt: 'Limonada.',
        },
        {
          name: 'Café frappé',
          description: 'Café frío con hielo y crema batida.',
          imageAlt: 'Café frappé.',
        }
      ]
    },
    {
      name: 'Golosinas',
      description: 'Endulza tu día con un rico caramelo.',
      imageSrc: require('../img/Dulces.jpg'),
      imageAlt: 'Golosinas deliciosas.',
      products: [
        {
          name: 'Gomitas con chamoy',
          description: 'Gomitas dulces con un toque de chamoy.',
          imageAlt: 'Gomitas con chamoy.',
        },
        {
          name: 'Chocolates',
          description: 'Deliciosos chocolates variados.',
          imageAlt: 'Chocolates.',
        }
      ]
    }
  ];

  if (isLoading) {
    return (
      <div className="loading-screen" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img src={loadingImage} alt="Cargando..." style={{ width: '200px', height: '200px' }} />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Categorias</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative" onClick={() => handleClick(callout)}>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center rounded-lg"
                      onClick={(e) => e.preventDefault()} // Evita que se desplace al inicio
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <span className="absolute inset-0" />
                    {callout.name}
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal showModal={showModal} onClose={handleCloseModal} content={selectedContent} />
    </div>
  );
};

export default Catalogo;

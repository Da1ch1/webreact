import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Combo Lunes',
    href: '#',
    imageSrc: require('../img/Pack1.jpg'), // Usa require para la imagen local
    imageAlt: "Paquete 1 de comida nutricional",
    price: '$',
    Contenido: 'Papas, Refresco, Hamburguesa'
  },
  {
    id: 2,
    name: 'Combo Martes',
    href: '#',
    imageSrc: require('../img/Pack2.jpg'),
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$',
    Contenido: 'Ensalada, Agua, Sandwich'
  },
  {
    id: 3,
    name: 'Combo Miercoles',
    href: '#',
    imageSrc: require('../img/Pack3.jpg'),
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$',
    Contenido: 'Ensalada, Agua, Sandwich'
  },
  {
    id: 4,
    name: 'Combo Jueves',
    href: '#',
    imageSrc: require('../img/Pack4.jpg'),
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$',
    Contenido: 'Ensalada, Agua, Sandwich'
  },
  {
    id: 5,
    name: 'Combo Viernes',
    href: '#',
    imageSrc: require('../img/Pack5.jpg'),
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$',
    Contenido: 'Ensalada, Agua, Sandwich'
  },
  // Agrega más productos según sea necesario
];

export default function Example() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-70 px-4 py-10 sm:px-6 sm:py-14 lg:max-w-4xl lg:px-5">
        <h2 className="mb-5 text-2xl font-bold tracking-tight text-gray-900">Dale un vistazo a nuestros combos de la semana!</h2> 

        <div className="mt-1 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative" onClick={() => handleOpenModal(product)}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span>{product.name}</span>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-9 rounded-md shadow-lg max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold">{selectedProduct.name}</h2>
            <img src={selectedProduct.imageSrc} alt={selectedProduct.imageAlt} className="mt-2 rounded-md w-48 h-auto" />
            <p className="mt-2 text-gray-700">Precio: {selectedProduct.price}</p>
            <p className="text-gray-500">Contenido: {selectedProduct.Contenido}</p>
          </div>
        </div>
      )}
    </div>
  );
}

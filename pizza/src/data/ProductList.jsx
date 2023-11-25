// ProductList.js
import { Card } from "../components/Card";

export const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripción del Producto 1",
      price: 19.99,
      image: "URL_DE_LA_IMAGEN_1",
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripción del Producto 2",
      price: 29.99,
      image: "URL_DE_LA_IMAGEN_2",
    },
    // Agrega más productos según sea necesario
  ];

  return (
    <div>
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};


import React from "react";
import { useState, useEffect } from "react";

export const products = [
  {
    id: 1,
    name: "Plain Short Sleeve T Shirt",
    href: "#",
    price: "$48",
    imageSrc:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    category: "t-shirt",
  },
  {
    id: 2,
    name: "Plain Short Sleeve T",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    category: "t-shirt",
  },
  {
    id: 3,
    name: "Plain Long Sleeve Gray T shirt",
    href: "#",
    price: "$89",
    imageSrc:
      "https://images.unsplash.com/photo-1618354691321-e851c56960d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    category: "Hoodies",
  },
  {
    id: 4,
    name: "Plain Long Sleeve T Shirt",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Hoodies",
  },
  {
    id: 1,
    name: "Plain Short Sleeve T Shirt",
    href: "#",
    price: "$48",
    imageSrc:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    category: "t-shirt",
  },
  {
    id: 2,
    name: "Plain Short Sleeve T",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    category: "t-shirt",
  },
  {
    id: 3,
    name: "Plain Long Sleeve Gray T shirt",
    href: "#",
    price: "$89",
    imageSrc:
      "https://images.unsplash.com/photo-1618354691321-e851c56960d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    category: "t-shirt",
  },
  {
    id: 4,
    name: "Plain Long Sleeve T Shirt",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "t-shirt",
  },
];

export const ProductsNavData = [
  {
    name: "All",
  },
  {
    name: "T-Shirts",
  },
  {
    name: "Hoodies",
  },
  {
    name: "Jeans",
  },
  {
    name: "Sneakers",
  },
];

const ProductsNav = () => {
  const [item, setItem] = useState({ name: "all" });
  const [Products, setProducts] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProducts(ProductsNavData);
    } else {
      const newProducts = ProductsNavData.filter((product) => {
        return product.category === item.name;
      });
      setProducts(newProducts);
    }
  }, [item]);
  const handleClick = (e, id) => {
    setProducts({ name: e.target.textContent });
  };

  return (
    <div style={{ borderBottom: "2px solid #eaeaea" }}>
      <ul className="flex cursor-pointer py-3 px-6">
        {ProductsNavData.map((item, id) => (
          <li
            className=" py-2 px-6 bg-white rounded-lg hover:bg-black hover:text-white "
            key={id}
            onClick={(e) => {
              handleClick(e, id);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsNav;

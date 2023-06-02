import { useEffect, useState } from "react";
/* import { ProductsNavData, products } from "./ProductsData"; */
const ProductsNavData = [
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
const products = [
  {
    id: 1,
    name: "Plain Short Sleeve T Shirt",
    href: "#",
    price: "$48",
    imageSrc:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    category: "T-Shirts",
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
    category: "T-Shirts",
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
    category: "T-Shirts",
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
    category: "T-Shirts",
  },
  {
    id: 5,
    name: "Plain Long Sleeve T Shirt",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1618354691551-44de113f0164?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "T-Shirts",
  },
  {
    id: 6,
    name: "Plain Long Sleeve T Shirt",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Sneakers",
  },
  {
    id: 7,
    name: "Plain Long Sleeve T Shirt",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Sneakers",
  },
  {
    id: 8,
    name: "Plain Long Sleeve T Shirt",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Sneakers",
  },
  {
    id: 9,
    name: "Plain Long Sleeve T Shirt",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Jeans",
  },
  {
    id: 10,
    name: "Plain Long Sleeve T Shirt",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1554967665-10343ae87a13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Jeans",
  },
  {
    id: 11,
    name: "Plain Long Sleeve T Shirt",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Jeans",
  },
];

export default function Example() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProducts(products);
    } else {
      const newProducts = products.filter((product) => {
        return product.category === activeCategory;
      });
      setFilteredProducts(newProducts);
    }
  }, [activeCategory]);

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="bg-white">
      <div style={{ borderBottom: "2px solid #eaeaea" }}>
        <ul className="flex cursor-pointer py-3 px-6">
          {ProductsNavData.map((item, index) => (
            <li
              className={`py-2 px-6 bg-white rounded-lg ${
                activeCategory === item.name ? "bg-black text-white" : ""
              }`}
              key={index}
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

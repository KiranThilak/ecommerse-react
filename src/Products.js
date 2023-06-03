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
    name: "T Shirt White",
    href: "#",
    price: "$48",
    imageSrc:
      "https://elements-cover-images-0.imgix.net/16314e3a-de2a-4ed3-9267-bead42e496a4?auto=compress%2Cformat&fit=max&w=1170&s=ddf0db39da3b17ee5bffa5e93018cfef",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    category: "T-Shirts",
  },
  {
    id: 2,
    name: "T Shirt Black",
    href: "#",
    price: "$35",
    imageSrc:
      "https://elements-cover-images-0.imgix.net/70bafd4c-c7ab-4652-884d-169e85b62213?auto=compress%2Cformat&fit=max&w=1170&s=042e677a9fdfe79e8c098d8477f36109",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    category: "T-Shirts",
  },
  {
    id: 3,
    name: "T Shirt Charcoal",
    href: "#",
    price: "$89",
    imageSrc:
      "https://elements-cover-images-0.imgix.net/0864a47b-f79d-4f6a-8914-8b6be71a23eb?auto=compress%2Cformat&fit=max&w=1170&s=d83b69f452c0fea564ab3eec20cb129c",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    category: "T-Shirts",
  },
  {
    id: 4,
    name: "Jeans Black",
    href: "#",
    price: "$35",
    imageSrc:
      "https://elements-cover-images-0.imgix.net/bd3c39f5-022d-4560-9a0e-5301069e74ce?auto=compress%2Cformat&fit=max&w=1170&s=28b14aa0fee6e25258cdefd1506e309c",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Jeans",
  },
  {
    id: 5,
    name: "Jeans Black",
    href: "#",
    price: "$35",
    imageSrc:
      "https://elements-cover-images-0.imgix.net/c7f8a208-4225-4890-a0b5-e49e453e826b?auto=compress%2Cformat&fit=max&w=1170&s=6c51e6ac4570179cdf31ab6c365091bf",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Jeans",
  },
  {
    id: 6,
    name: "Jeans Grey",
    href: "#",
    price: "$35",
    imageSrc:
      "https://elements-cover-images-0.imgix.net/51c830c5-2fda-4968-b814-7f2ab6d32a99?auto=compress%2Cformat&fit=max&w=1170&s=7da2d0d5ddd217db73fe4f0a9b9109ea",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Jeans",
  },
  {
    id: 7,
    name: "Black Hoodie",
    href: "#",
    price: "$35",
    imageSrc:
      "https://elements-cover-images-0.imgix.net/561cbc8a-5439-4947-bad0-a394f4431fdc?auto=compress%2Cformat&fit=max&w=1170&s=e4469fc03cbd31255b2dcea544a1b9f1",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Hoodies",
  },
  {
    id: 8,
    name: "Yellow Hoodie",
    href: "#",
    price: "$35",
    imageSrc:
      "https://elements-cover-images-0.imgix.net/2d11bdfc-9b72-4789-b34e-18fe4bd69270?auto=compress%2Cformat&fit=max&w=1170&s=2b07067fa11840f44dd610c948590bc2",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Hoodies",
  },
  {
    id: 9,
    name: "White Hoodie",
    href: "#",
    price: "$35",
    imageSrc:
      "https://elements-cover-images-0.imgix.net/474038d7-eece-4801-802f-dfe4d2767961?auto=compress%2Cformat&fit=max&w=1170&s=3e171e55624e1213da63ef1fa5a21de3",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Hoodies",
  },
  {
    id: 10,
    name: "Sneakers Red",
    href: "#",
    price: "$35",
    imageSrc:
      "https://elements-cover-images-0.imgix.net/0c108c0b-17d2-4cd8-b614-03e5fc2f109d?auto=compress%2Cformat&fit=max&w=1170&s=0e07b9a3a4bb74bc1743be9a41370290",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Sneakers",
  },
  {
    id: 11,
    name: "Sneakers Black",
    href: "#",
    price: "$35",
    imageSrc:
      "https://elements-cover-images-0.imgix.net/9308db54-6196-4e17-b0e6-c4c08f2c520b?auto=compress%2Cformat&fit=max&w=1170&s=e1a8d7a1330b9bf02a0ec19db8c6701e",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Sneakers",
  },
  {
    id: 12,
    name: "Sneakers White",
    href: "#",
    price: "$35",
    imageSrc:
      "https://elements-cover-images-0.imgix.net/b22c618b-475b-4ffe-b2b0-15a244ae0229?auto=compress%2Cformat&fit=max&w=1170&s=4ac9e0ae1b645f273a71e68430b217e3",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "Sneakers",
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
              className={`py-2 px-6 bg-white rounded-lg text-black ${
                activeCategory === item.name
                  ? "bg-black text-white hover:bg-black hover:text-white"
                  : "hover:bg-black hover:text-white"
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
            <a key={product.id} href={product.href} className="group ">
              <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
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

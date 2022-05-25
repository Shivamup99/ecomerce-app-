import React, { useEffect, useState } from "react";
import "./style/product.css";
import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/product`);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="products">
      {products.map((item, i) => (
        <div className="product-item" key={i}>
          <img src={item.img} alt={item.id} className="product-img" />
          <div className="pro-icons">
            <div className="love">
              <FavoriteBorderOutlined />
            </div>
            <div className="shop">
              <ShoppingCartOutlined />
            </div>
            <div className="search-io">
              <Link to={`/product-info/${item._id}`} style={{ color: "green" }}>
                <Search />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl" id="productList">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's a "Blessing"</h1>
        <p className="pl-desc">
        My creative flair is the secret sauce your business needs. Combine your genius 
        ideas with my technical know-how, and we've got a killer combo. Explore some of my 
        creations for a spark of inspiration.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

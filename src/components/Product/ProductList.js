import { Row } from "antd"
import ProductItem from "./ProductItem"
import product from "../../data/product.json"

const ProductList = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={[40, 32]}>
        {product.map((item, index) => (
          <ProductItem
            title={item.title}
            desc={item.description}
            nPrice={item.normalPrice}
            sPrice={item.salesPrice}
            img={item.image}
            key={index}
          />
        ))}
      </Row>
    </div>
  )
}
export default ProductList

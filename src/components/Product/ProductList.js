import { Row } from "antd"
import ProductItem from "./ProductItem"

const ProductList = ({ products }) => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={[40, 32]}>
        {products.map((e) => (
          <ProductItem key={e.product_id} product={e} />
        ))}
      </Row>
    </div>
  )
}
export default ProductList

import { Row } from "antd"
import ProductItem from "./ProductItem"

const ProductList = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={[40, 32]}>
        <ProductItem />
      </Row>
    </div>
  )
}
export default ProductList

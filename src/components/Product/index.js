import { Col } from "antd"
import ProductList from "./ProductList"
import * as S from "./styles"

const Product = ({ title, id }) => {
  return (
    <S.ProductContainer id={id}>
      <Col lg={20} md={24} sm={24} xs={24}>
        <h6>{title || "Hot Deals 🔥"}</h6>
        <ProductList />
      </Col>
    </S.ProductContainer>
  )
}

export default Product

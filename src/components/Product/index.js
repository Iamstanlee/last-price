import { Row, Col } from "antd"
import * as S from "./styles"

const Product = ({ title, id }) => {
  return (
    <S.ProductContainer id={id}>
      <Col lg={14} md={14} sm={14} xs={24}>
        <h6>{title || "Hot Deals 🔥"}</h6>
        {/* product listing here */}
      </Col>
    </S.ProductContainer>
  )
}

export default Product

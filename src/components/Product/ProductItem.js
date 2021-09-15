import * as S from "./styles"
import { Card, Col } from "antd"
const { Meta } = Card

const ProductItem = ({ title, nPrice, sPrice, img }) => {
  return (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
      <Card hoverable cover={<img alt={title} src={img} />}>
        <Meta title={title} />
        <S.CardFooter>
          <S.CardPriceContainer>
            <S.CardNormalPrice>{nPrice}</S.CardNormalPrice>
            <S.CardSalesPrice>{sPrice}</S.CardSalesPrice>
          </S.CardPriceContainer>
          <S.CardButton>Buy Item</S.CardButton>
        </S.CardFooter>
      </Card>
    </Col>
  )
}
export default ProductItem

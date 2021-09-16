import * as S from "./styles"
import { Card, Col } from "antd"
import { useHistory } from "react-router-dom"
const { Meta } = Card

const ProductItem = () => {
  const h = useHistory()
  return (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
      <Card cover={<img alt="example" src="/img/aa.jpg" />}>
        <Meta
          title="Assassin's Creed: Valhalla - Xbox One/Series X"
          description=""
        />
        <S.CardFooter>
          <S.CardPriceContainer>
            <S.CardNormalPrice>$164.99</S.CardNormalPrice>
            <S.CardSalesPrice>$99.99</S.CardSalesPrice>
          </S.CardPriceContainer>
          <S.CardButton onClick={(e) => h.push("/deal/uuid")}>
            Buy Item
          </S.CardButton>
        </S.CardFooter>
      </Card>
    </Col>
  )
}
export default ProductItem

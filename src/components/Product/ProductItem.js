import * as S from "./styles"
import { Card, Col } from "antd"
import { useHistory } from "react-router-dom"
import { getSlug } from "../../utils/helpers"
const { Meta } = Card

const ProductItem = ({ title,desc, nPrice, sPrice, img }) => {
  const h = useHistory()
  return (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
      <Card cover={<img alt={title} src={img} />}>
        <Meta title={title} />
        <S.CardFooter>
          <S.CardPriceContainer>
            <S.CardNormalPrice>{nPrice}</S.CardNormalPrice>
            <S.CardSalesPrice>{sPrice}</S.CardSalesPrice>
          </S.CardPriceContainer>
          <S.CardButton
            onClick={(e) =>
              h.push(`deals/${getSlug(title)}`, {
                title,
                desc,
                nPrice,
                sPrice,
                img,
              })
            }
          >
            Buy Item
          </S.CardButton>
        </S.CardFooter>
      </Card>
    </Col>
  )
}
export default ProductItem

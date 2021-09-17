import * as S from "./styles"
import { Card, Col } from "antd"
import { useHistory } from "react-router-dom"
import { formatAmount, getLastPrice } from "../../utils/helpers"
const { Meta } = Card

const ProductItem = ({ product }) => {
  const history = useHistory()
  return (
    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
      <Card
        cover={<img alt={product.product_name} src={product.product_image} />}
      >
        <Meta title={product.product_name} />
        <S.CardFooter>
          <S.CardPriceContainer>
            <S.CardNormalPrice>
              {formatAmount(product.product_price)}
            </S.CardNormalPrice>
            <S.CardSalesPrice>
              {product.last_price ||
                formatAmount(
                  getLastPrice(product.product_price, product.percentage_off)
                )}
            </S.CardSalesPrice>
          </S.CardPriceContainer>
          <S.CardButton
            onClick={(e) =>
              history.push(`deals?pid=${product.product_id}`, {
                params: product,
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

import React, { useEffect } from "react"
import * as S from "./styles"
import { useHistory, useLocation } from "react-router-dom"
import { formatAmount, getLastPrice } from "../../utils/helpers"

const ProductDetail = () => {
  const location = useLocation()
  const history = useHistory()

  const { product } = location.state
  useEffect(() => {
    // get product dets from url if not passed from home page
  }, [])

  return (
    <S.Container>
      <S.DealImageContainer>
        <S.DealImage alt={product.product_image} src={product.product_image} />
      </S.DealImageContainer>
      <S.DetailsContainer>
        <S.Title>{product.product_name}</S.Title>
        <S.Desc>{product.product_description}</S.Desc>
        <S.PriceContainer>
          <S.NormalPrice>{formatAmount(product.product_price)}</S.NormalPrice>
          <S.SalesPrice>
            {formatAmount(
              getLastPrice(product.product_price, product.percentage)
            )}
          </S.SalesPrice>
        </S.PriceContainer>
        <S.Button
          onClick={() => {
            history.push(`/checkout${location.pathname}${location.search}`)
          }}
        >
          Buy Now
        </S.Button>
      </S.DetailsContainer>
    </S.Container>
  )
}

export default ProductDetail

import React from "react"
import * as S from "./styles"

const ProductDetail = () => {
  return (
    <S.Container>
      <S.DealImageContainer>
        <S.DealImage alt="example" src="/img/aa.jpg" />
      </S.DealImageContainer>
      <S.DetailsContainer>
        <S.Title>Assassin's Creed: Valhalla - Xbox One/Series X</S.Title>
        <S.Desc>Assassin's Creed: Valhalla - Xbox One/Series X</S.Desc>
        <S.PriceContainer>
          <S.NormalPrice>$164.99</S.NormalPrice>
          <S.SalesPrice>$104.99</S.SalesPrice>
        </S.PriceContainer>
        <S.Button>Buy Item</S.Button>
      </S.DetailsContainer>
    </S.Container>
  )
}

export default ProductDetail

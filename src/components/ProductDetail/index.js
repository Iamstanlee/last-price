import React from "react"
import * as S from "./styles"
import { useLocation } from "react-router-dom"

const ProductDetail = () => {
  const location = useLocation()
  //   const product = location.state
  //   console.log(location.state);
  return (
    <S.Container>
      <S.DealImageContainer>
        <S.DealImage alt="example" src={location.state.img} />
      </S.DealImageContainer>
      <S.DetailsContainer>
        <S.Title>{location.state.title}</S.Title>
        <S.Desc>{location.state.desc}</S.Desc>
        <S.PriceContainer>
          <S.NormalPrice>{location.state.nPrice}</S.NormalPrice>
          <S.SalesPrice>{location.state.sPrice}</S.SalesPrice>
        </S.PriceContainer>
        <S.Button>Buy Now</S.Button>
      </S.DetailsContainer>
    </S.Container>
  )
}

export default ProductDetail

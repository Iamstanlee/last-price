import React from "react"
import * as S from "./styles"

function BalanceCard({ background, title, data }) {
  return (
    <div>
      <S.Card background={background}>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardData>{data}</S.CardData>
      </S.Card>
    </div>
  )
}

export default BalanceCard

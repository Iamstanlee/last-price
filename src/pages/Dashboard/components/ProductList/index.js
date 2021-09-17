import { useProductContext } from "../../../../context/ProductContext"
import { formatAmount } from "../../../../utils/helpers"
import * as S from "./styles"

function ProductList() {
  const {
    product: { products },
  } = useProductContext()
  return (
    <S.CardContainer>
      {products &&
        products.map((product) => (
          <S.Card key={product.product_id}>
            <S.DetailContainer>
              <S.Img src={product.product_image} />
              <S.Details>
                <S.Name>{product.product_name}</S.Name>
                <S.Price>
                  Last Price: {formatAmount(product.last_price)}
                </S.Price>
              </S.Details>
            </S.DetailContainer>
            <S.Sales>2 Sales</S.Sales>
          </S.Card>
        ))}
    </S.CardContainer>
  )
}

export default ProductList

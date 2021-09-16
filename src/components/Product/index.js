import { Col } from "antd"
import { useEffect } from "react"
import { getProducts, useProductContext } from "../../context/ProductContext"
import ProductList from "./ProductList"
import * as S from "./styles"

const Product = ({ title, id }) => {
  const {
    product: { products },
    updateProductContext,
  } = useProductContext()

  useEffect(() => {
    getProducts(updateProductContext)
    // eslint-disable-next-line
  }, [])

  return (
    <S.ProductContainer id={id}>
      <Col lg={20} md={24} sm={24} xs={24}>
        <h6>{title}</h6>
        <S.ProductList>
          {products ? (
            <ProductList products={products} />
          ) : (
            <S.Span>Getting best deals...</S.Span>
          )}
        </S.ProductList>
      </Col>
    </S.ProductContainer>
  )
}

export default Product

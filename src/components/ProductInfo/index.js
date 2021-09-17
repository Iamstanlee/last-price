import React, { useEffect, useState } from "react"
import * as S from "./styles"
import { useHistory, useLocation } from "react-router-dom"
import { formatAmount, getLastPrice, getParamByName } from "../../utils/helpers"
import { getProductById } from "../../context/ProductContext"
import Loader from "../../common/Loader"

const ProductInfo = () => {
  const location = useLocation()
  const history = useHistory()
  const { params } = (location && location.state) || {}
  const [product, setProduct] = useState(params)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!product) {
      getProduct()
    }
  }, [product])

  const getProduct = async () => {
    setLoading(true)
    try {
      const resp = await getProductById(getParamByName("pid"))
      if (resp.success) {
        setProduct(resp.data)
      } else {
        setError(resp.message)
      }
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  return (
    <S.Container>
      {error && <S.Span>{error}</S.Span>}
      {loading && <Loader />}
      {product && (
        <>
          <S.DealImageContainer>
            <S.DealImage
              alt={product.product_image}
              src={product.product_image}
            />
          </S.DealImageContainer>
          <S.DetailsContainer>
            <S.Title>{product.product_name}</S.Title>
            <S.Desc>{product.product_description}</S.Desc>
            <S.PriceContainer>
              <S.NormalPrice>
                {formatAmount(product.product_price)}
              </S.NormalPrice>
              <S.SalesPrice>
                {product.last_price ||
                  formatAmount(
                    getLastPrice(product.product_price, product.percentage_off)
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
        </>
      )}
    </S.Container>
  )
}

export default ProductInfo

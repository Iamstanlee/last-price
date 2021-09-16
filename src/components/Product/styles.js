import styled from "styled-components"

export const ProductContainer = styled.section`
  position: relative;
  padding: 5rem 0 5rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 4rem 0 4rem;
  }
`
export const ProductList = styled.section`
  margin: 3.5rem 0;
`

export const CardFooter = styled.div`
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  margin-top: 1rem;
`
export const CardPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 1rem;
`
export const CardNormalPrice = styled.p`
  color: #ee1515;
  font-size: 1.025rem;
  font-weight: 700;
  margin: 0;
  text-decoration: line-through;
  margin-right: 8px;
`
export const CardSalesPrice = styled.p`
  color: #465157;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`

export const CardButton = styled.button`
  color: #fff;
  background-color: #000;
  border: 1px solid #000;
  font-weight: 700;
  padding: 0.4rem;
  width: 100%;
  cursor: pointer;
`

export const Span = styled.span`
  text-align: center;
  font-weight: bold;
  padding-top: 10px;
`

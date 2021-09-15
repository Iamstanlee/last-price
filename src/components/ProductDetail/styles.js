import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DealImageContainer = styled.div`
  padding: 1rem;
`
export const DealImage = styled.img`
  width: 200px;
  object-fit: cover;
`
export const DetailsContainer = styled.div`
  padding: 1rem;
`
export const Title = styled.h4`
  font-size: 1.075rem;
`
export const Desc = styled.p`
  font-size: 1.075rem;
`
export const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  align-items: end;
`
export const NormalPrice = styled.p`
  color: #ee1515;
  font-size: 1.075rem;
  font-weight: 700;
  margin: 0;
  padding-right: 7px;
  text-decoration: line-through;
`
export const SalesPrice = styled.p`
  color: #465157;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`

export const Button = styled.button`
  color: #fff;
  background-color: #000;
  border: 1px solid #000;
  font-weight: 700;
  padding: 0.4rem;
  width: 100%;
  cursor: pointer;
`

import styled from "styled-components"
import { Link } from "react-router-dom"

export const DashboardContainer = styled.div`
  padding: 5rem 1rem;
  text-align: center;
`
export const NavLink = styled(Link)`
  font-size: 14px;
  background: #000;
  color: #fff !important;
  display: flex;
  border-radius: 5px;
  align-items: center;
  padding: 0.2rem 0.4rem;
  font-weight: 600;
`
export const CardContainer = styled.div`
  @media only screen and (min-width: 1046px) {
    width: 70%;
  }
`
export const Span = styled.span`
  display: block;
  color: ${(props) => props.color};
  font-size: 1rem;
  text-align: center;
`

export const ButtonContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 1046px) {
    width: 70%;
  }
`
export const ProductContainer = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

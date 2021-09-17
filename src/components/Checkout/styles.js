import styled from "styled-components"
import { Link } from "react-router-dom"

export const CheckoutContainer = styled.div`
  padding: 5rem 1rem;
`

export const FormGroup = styled.form`
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    flex-direction: column;
    margin-top: 0.5rem;
  }
`
export const InputContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 1046px) {
    width: 70%;
  }
`
export const NavLink = styled(Link)`
  font-size: 14px;
`

export const Span = styled.span`
  display: block;
  color: ${(props) => props.color};
  padding: ${(props) => props.padding || "4px 0.675rem"};
  margin-bottom: 0.2rem;
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

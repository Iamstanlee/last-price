import styled from "styled-components"
import { Link } from "react-router-dom"

export const PostDealContainer = styled.div`
  padding: 5rem 0;
`

export const FormGroup = styled.form`
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
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

export const ImgInput = styled.input`
  max-width: auto !important;
  width: 100%;
  border-width: 2px;
  border-style: dotted;
  border-color: ${(props) =>
    props.drag
      ? "blue"
      : "-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))"};
  outline: none;
  font-size: 0.875rem;
  padding: 1rem 1.25rem;
  transition: border-color 0.3s ease-in;
  border-radius: 8px;
  color: #000;
  margin-bottom: 10px;
  &:focus,
  &:hover {
    border-color: #2e186a;
  }
`

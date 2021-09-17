import styled from "styled-components"

export const Button = styled.button`
  background-color: #fff;
  background-color: ${(props) => props.color || "#000"};
  color: ${(props) => (props.color ? "#000" : "#fff")};
  font-size: 1rem;
  font-weight: 500;
  padding: 0 10px;
  width: 100%;
  border: 1px solid #000;
  border-radius: 8px;
  height: 52px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: ${(props) => (props.width ? props.width : "180px")};
`

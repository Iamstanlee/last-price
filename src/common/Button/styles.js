import styled from "styled-components"
export const Button = styled.button`
  background: ${(props) => props.color || "#000"};
  color: ${(props) => (props.color ? "#000" : "#fff")};
  font-size: 1rem;
  font-weight: 500;
  padding: 0 10px;
  width: 100%;
  border: ${(props) => (props.color ? "1px solid #000" : "0px")};
  border-radius: 8px;
  height: 52px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: ${(props) => (props.width ? props.width : "180px")};

//   @media only screen and (max-width: 1024px) {
//     width: ${(props) => (props.width ? "160px" : "100%")};
//   }

//   @media only screen and (max-width: 768px) {
//     width: ${(props) => (props.width ? "140px" : "100%")};
//   }

//   @media only screen and (max-width: 480px) {
//     width: ${(props) => (props.width ? "130px" : "100%")};
//   }
`

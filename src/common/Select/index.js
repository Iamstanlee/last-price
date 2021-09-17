import * as S from "./styles"

const Input = ({ id, name, onChange,children }) => (
  <S.Container>
    {id && (
      <S.Label>
        <label htmlFor={name}>{id}</label>
      </S.Label>
    )}
    <S.Select
      name={name}
      id={name}
      onChange={onChange}
    >
       {children}
    </S.Select>
  </S.Container>
)

export default Input

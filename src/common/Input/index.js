import * as S from "./styles"

const Input = ({ id, name, type, placeholder, onChange, value }) => (
  <S.Container>
    {id && (
      <S.Label>
        <label htmlFor={name}>{id}</label>
      </S.Label>
    )}
    <S.Input
      spellcheck="false"
      placeholder={placeholder}
      name={name}
      id={name}
      type={type}
      onChange={onChange}
      value={value}
    />
  </S.Container>
)

export default Input

import * as S from "./styles"
import { Select } from "antd"

const Input = ({ id, name, onChange, children }) => {
  return (
    <S.Container>
      {id && (
        <S.Label>
          <label htmlFor={name}>{id}</label>
        </S.Label>
      )}

      <Select
        style={{ width: "100%" }}
        name={name}
        id={name}
        onChange={onChange}
        showSearch
        placeholder="Search to Select"
      >
        {children}
      </Select>
    </S.Container>
  )
}

export default Input

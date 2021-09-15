import { withTranslation } from "react-i18next"

import * as S from "./styles"

const Input = ({ id, name,type, placeholder, onChange, value, t }) => (
  <S.Container>
    {id && (
      <S.Label>
        <label htmlFor={name}>{t(id)}</label>
      </S.Label>
    )}
    <S.Input
      spellcheck="false"
      placeholder={t(placeholder)}
      name={name}
      id={name}
      type={type}
      onChange={onChange}
      value={value}
    />
  </S.Container>
)

export default withTranslation()(Input)

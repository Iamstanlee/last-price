import { lazy } from "react"
import { Col } from "antd"
import * as S from "./styles"

import useRegisterForm from "./useRegisterForm"
import validate from "./validationRules"

const Input = lazy(() => import("../../common/Input"))
const Button = lazy(() => import("../../common/Button"))

const Register = (props) => {
  const {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
  } = useRegisterForm(validate)

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type]
    return errors[type] ? (
      <S.Span color="#ff0033" padding="0">
        {ErrorMessage}
      </S.Span>
    ) : (
      <S.Span />
    )
  }

  return (
    <S.RegisterContainer>
      <Col lg={10} md={12} sm={24} xs={24} className="margin-auto">
        <S.FormGroup
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <h6>Register</h6>
          <S.InputContainer>
            <Input
              type="text"
              id="Brand name"
              name="fullname"
              placeholder="Enye Shoes"
              value={values.fullname || ""}
              onChange={handleChange}
            />
            <ValidationType type="fullname" />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              type="email"
              id="Email address"
              name="email"
              placeholder="foo@bar.com"
              value={values.email || ""}
              onChange={handleChange}
            />
            <ValidationType type="email" />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              type="password"
              id="Password"
              name="password"
              placeholder="Min. 8 characters"
              value={values.password || ""}
              onChange={handleChange}
            />
            <ValidationType type="password" />
          </S.InputContainer>
          <S.ButtonContainer>
            <Button name="submit" type="submit" width="98%">
              {loading ? "Please Wait..." : "REGISTER"}
            </Button>
          </S.ButtonContainer>
          <S.Span>
            Already have an account?
            <S.NavLink to="/login"> Login</S.NavLink>
          </S.Span>
        </S.FormGroup>
      </Col>
    </S.RegisterContainer>
  )
}

export default Register

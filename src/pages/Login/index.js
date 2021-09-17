import { lazy } from "react"
import { Col } from "antd"
import * as S from "./styles"

import useLoginForm from "./useLoginForm"
import validate from "./validationRules"

const Input = lazy(() => import("../../common/Input"))
const Button = lazy(() => import("../../common/Button"))

const Login = (props) => {
  const { values, errors, loading, handleChange, handleSubmit } = useLoginForm(
    validate
  )

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
    <S.LoginContainer>
      <Col lg={10} md={12} sm={24} xs={24} className="margin-auto">
        <S.FormGroup
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <h6>Welcome back, Login.</h6>
          <S.InputContainer>
            <Input
              type="email"
              id="Email address"
              name="email"
              placeholder="foo@bar.com"
              value={values.email}
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
              value={values.password}
              onChange={handleChange}
            />
            <ValidationType type="password" />
          </S.InputContainer>
          <S.ButtonContainer>
            <Button name="submit" type="submit" width="98%">
              {loading ? "Please Wait..." : "LOGIN"}
            </Button>
          </S.ButtonContainer>
          <S.Span>
            Don't have an account?
            <S.NavLink to="/register"> Register</S.NavLink>
          </S.Span>
        </S.FormGroup>
      </Col>
    </S.LoginContainer>
  )
}

export default Login

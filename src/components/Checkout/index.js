import { lazy } from "react"
import { Col } from "antd"
import * as S from "./styles"

import useCheckoutForm from "./useCheckoutForm"
import validate from "./validationRules"

const Input = lazy(() => import("../../common/Input"))
const Button = lazy(() => import("../../common/Button"))

const Checkout = () => {
  const {
    values,
    errors,
    loading,
    loading2,
    handleChange,
    handleSubmit,
    payManually,
  } = useCheckoutForm(validate)

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
    <S.CheckoutContainer>
      <Col lg={10} md={12} sm={24} xs={24} className="margin-auto">
        <S.FormGroup
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <h6>Checkout</h6>
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
              id="Phone number"
              name="phonenumber"
              placeholder="090000000000"
              value={values.phonenumber}
              onChange={handleChange}
            />
            <ValidationType type="phonenumber" />
          </S.InputContainer>
          {/* <S.InputContainer>
            <Input
              id="Delivery address"
              name="address"
              placeholder="delivery address"
              value={values.address}
              onChange={handleChange}
            />
            <ValidationType type="address" />
          </S.InputContainer> */}
          <S.ButtonContainer>
            <Button name="submit" type="submit" width="100%">
              {loading ? "Please Wait..." : "Pay Now"}
            </Button>
          </S.ButtonContainer>
          <S.ButtonContainer>
            <Button color="#fff" width="100%" onClick={(e) => payManually(e)}>
              {loading2 ? "Please Wait..." : "Pay Manually"}
            </Button>
          </S.ButtonContainer>
        </S.FormGroup>
      </Col>
    </S.CheckoutContainer>
  )
}

export default Checkout

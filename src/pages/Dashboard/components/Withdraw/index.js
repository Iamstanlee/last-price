import { lazy, useEffect, useState } from "react"
import { Col } from "antd"
import * as S from "./styles"

import useWithdrawForm from "./useWithdrawForm"
import validate from "./validationRules"

const Input = lazy(() => import("../../../../common/Input"))
const Button = lazy(() => import("../../../../common/Button"))
const Select = lazy(() => import("../../../../common/Select"))

const Withdraw = () => {
  const {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
  } = useWithdrawForm(validate)

  const [banks, setBanks] = useState(null)

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

  useEffect(() => {

  })

  return (
    <S.WithdrawContainer>
      <Col lg={10} md={12} sm={24} xs={24} className="margin-auto">
        <S.FormGroup
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <h6>Withdraw Funds</h6>
          <S.InputContainer>
            <Input
              type="text"
              id="Amount"
              name="amount"
              placeholder="4000"
              value={values.amount}
              onChange={handleChange}
            />
            <ValidationType type="amount" />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              type="text"
              id="Account Number"
              name="account_number"
              placeholder="0765640121"
              value={values.account_number}
              onChange={handleChange}
            />
            <ValidationType type="account_number" />
          </S.InputContainer>
          <S.InputContainer>
            <Select id="Bank Name" name="bank_name" onChange={handleChange}>
              <option value="">Select your bank</option>
              <option value="Access Bank">GTBank</option>
              <option value="Access Bank">UBA</option>
              <option value="Access Bank">Wema Bank</option>
              <option value="Access Bank">Zenith Bank</option>
            </Select>
            <ValidationType type="bank_name" />
          </S.InputContainer>
          <S.ButtonContainer>
            <Button name="submit" type="submit" width="100%">
              {loading ? "Please Wait..." : "Withdraw"}
            </Button>
          </S.ButtonContainer>
        </S.FormGroup>
      </Col>
    </S.WithdrawContainer>
  )
}

export default Withdraw

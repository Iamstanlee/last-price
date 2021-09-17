import { lazy, useEffect } from "react"
import { Col, Select } from "antd"
import * as S from "./styles"

import useWithdrawForm from "./useWithdrawForm"
import validate from "./validationRules"

const Input = lazy(() => import("../../../../common/Input"))
const Button = lazy(() => import("../../../../common/Button"))
const Loader = lazy(() => import("../../../../common/Loader"))
const SelectInput = lazy(() => import("../../../../common/Select"))

const Withdraw = () => {
  const {
    values,
    errors,
    loading,
    banks,
    handleChange,
    handleSelectChange,
    handleSubmit,
    getBanks,
  } = useWithdrawForm(validate)

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
    getBanks()
    // eslint-disable-next-line
  }, [])

  return (
    <S.WithdrawContainer>
      <Col lg={10} md={12} sm={24} xs={24} className="margin-auto">
        <S.FormGroup
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          {banks ? (
            <>
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
                <SelectInput
                  id="Bank Name"
                  name="bank_code"
                  onChange={handleSelectChange}
                >
                  {banks.map((bank) => (
                    <Select.Option key={bank.code} value={bank.code}>
                      {bank.name}
                    </Select.Option>
                  ))}
                </SelectInput>
                <ValidationType type="bank_code" />
              </S.InputContainer>
              <S.ButtonContainer>
                <Button name="submit" type="submit" width="100%">
                  {loading ? "Please Wait..." : "Withdraw"}
                </Button>
              </S.ButtonContainer>
            </>
          ) : (
            <Loader />
          )}
        </S.FormGroup>
      </Col>
    </S.WithdrawContainer>
  )
}

export default Withdraw

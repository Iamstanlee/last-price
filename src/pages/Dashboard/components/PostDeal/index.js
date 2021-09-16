import { lazy, useState } from "react"
import { Col } from "antd"
import * as S from "./styles"

import usePDForm from "./usePDForm"
import validate from "./validationRules"
import { formatAmount, getLastPrice } from "../../../../utils/helpers"

const Input = lazy(() => import("../../../../common/Input"))
const Button = lazy(() => import("../../../../common/Button"))

const PostDeal = () => {
  const { values, errors, loading, handleChange, handleSubmit } = usePDForm(
    validate
  )
  const [drag, setDrag] = useState(false)

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
    <S.PostDealContainer>
      <Col lg={10} md={12} sm={24} xs={24} className="margin-auto">
        <S.FormGroup
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <h6>Post Deal</h6>
          <S.InputContainer>
            <div
              onDragOver={(event) => {
                event.preventDefault()
                setDrag(true)
              }}
              onDragLeave={(event) => {
                event.preventDefault()
                setDrag(false)
              }}
              onDrop={(event) => {
                event.preventDefault()
                setDrag(false)
                let file
                if (event.dataTransfer.items) {
                  if (event.dataTransfer.items[0].kind === "file") {
                    file = event.dataTransfer.items[0].getAsFile()
                  }
                } else {
                  file = event.dataTransfer.files[0]
                }
                values.product_image = file
              }}
            >
              <label
                htmlFor="image_upload"
                className="cursor-pointer text-center"
              >
                Drag or tap to add a product image
              </label>
              <S.ImgInput
                type="file"
                id="image_upload"
                name="image_upload"
                accept=".jpg, .jpeg, .png"
                drag={drag}
                className="hidden"
                onChange={(event) => {
                  event.preventDefault()
                  values.product_image = event.target.files[0]
                }}
              />
            </div>
            <ValidationType type="product_image" />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              id="Product name"
              name="product_name"
              placeholder="Rolex watch"
              value={values.product_name || ""}
              onChange={handleChange}
            />
            <ValidationType type="product_name" />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              id="Product description"
              name="product_description"
              placeholder="sell this product, talk about why your customers need it"
              value={values.product_description || ""}
              onChange={handleChange}
            />
            <ValidationType type="product_description" />
          </S.InputContainer>

          <S.InputContainer>
            <Input
              id="Product price"
              name="product_price"
              placeholder="10,000"
              value={values.product_price || ""}
              onChange={handleChange}
            />
            <ValidationType type="product_price" />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              id="Percentage off"
              name="percentage_off"
              placeholder="10%"
              value={values.percentage_off || ""}
              onChange={handleChange}
            />
            <ValidationType type="percentage_off" />
          </S.InputContainer>
          {values.product_price && (
            <S.Span color="#000" padding="0">
              Lastprice:{" "}
              {formatAmount(
                getLastPrice(
                  parseInt(values.product_price) * 100,
                  values.percentage_off
                )
              )}
            </S.Span>
          )}

          <S.ButtonContainer>
            <Button name="submit" type="submit" width="98%">
              {loading ? "Please Wait..." : "POST"}
            </Button>
          </S.ButtonContainer>
        </S.FormGroup>
      </Col>
    </S.PostDealContainer>
  )
}

export default PostDeal

import { Row, Col } from "antd"
import Slide from "react-reveal/Slide"
import PngIcon from "../../common/PngIcon"
import Button from "../../common/Button"

import * as S from "./styles"

const Hero = ({ title, content, button, icon }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id || "/")
    element.scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    <S.HeroContainer>
      <Row type="flex" justify="space-between" align="middle">
        <Col lg={14} md={14} sm={14} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h1>{title}</h1>
              <S.Content>{content}</S.Content>
              <S.ButtonWrapper>
                {button && typeof button === "object" ? (
                  button.map((item, id) => {
                    return (
                      <Button key={id} color={item.color} width="true">
                        {item.title}
                      </Button>
                    )
                  })
                ) : (
                  <Button
                    name="submit"
                    type="submit"
                    onClick={() => scrollTo("")}
                  >
                    {button}
                  </Button>
                )}
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={8} md={8} sm={10} xs={24}>
          <Slide right>
            <S.Imgwrapper>
              <PngIcon src={icon} />
            </S.Imgwrapper>
          </Slide>
        </Col>
      </Row>
    </S.HeroContainer>
  )
}

export default Hero

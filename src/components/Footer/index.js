import { lazy, Fragment } from "react"
import { Row, Col } from "antd"
import * as S from "./styles"

const SvgIcon = lazy(() => import("../../common/SvgIcon"))
const PngIcon = lazy(() => import("../../common/PngIcon"))
const Container = lazy(() => import("../../common/Container"))

const Footer = () => {
  const SocialLink = ({ href, src }) => {
    return (
      <S.SocialLink>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          key={src}
          aria-label={src}
        >
          <SvgIcon src={src} width="25px" height="25px" />
        </a>
      </S.SocialLink>
    )
  }

  return (
    <Fragment>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>Contact</S.Language>
                <a href="mailto:hello@lastprice.app">
                  <S.Chat>hello@lastprice.app</S.Chat>
                </a>
                <a href="https://wa.me/+2349038622012">
                  <S.Chat>+2349038622012</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>Policy</S.Title>
                <S.Large to="/" left="true">
                  Terms and Condition
                </S.Large>
                <S.Large left="true" to="/">
                  Privacy Policy
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Title>Company</S.Title>
                <S.Large left="true" to="/" onClick={() => {}}>
                  About
                </S.Large>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <PngIcon src="logo.png" aria-label="homepage" />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink href="" src="twitter.svg" />
                <SocialLink href="" src="linkedin.svg" />
                <SocialLink href="" src="instagram.svg" />
                <SocialLink href="#" src="medium.svg" />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
    </Fragment>
  )
}

export default Footer

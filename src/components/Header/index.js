import { useState, Fragment, lazy } from "react"
import { Row, Col, Drawer } from "antd"
import { CSSTransition } from "react-transition-group"
import * as S from "./styles"
import { useUserContext } from "../../context/UserContext"
const SvgIcon = lazy(() => import("../../common/SvgIcon"))
const PngIcon = lazy(() => import("../../common/PngIcon"))

const Header = () => {
  const [isNavVisible] = useState(false)
  const [isSmallScreen] = useState(false)
  const [visible, setVisibility] = useState(false)
  const {
    user: { user },
  } = useUserContext()

  const showDrawer = () => {
    setVisibility(!visible)
  }

  const onClose = () => {
    setVisibility(!visible)
  }

  const MenuItem = () => {
    return (
      <Fragment>
        <S.CustomNavLinkSmall
          to={
            user
              ? "/dashboard/post-a-deal"
              : "/login?next=/dashboard/post-a-deal&from=/login"
          }
        >
          <S.Span>Post a Deal</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall to={user ? "/dashboard" : "/login"}>
          <SvgIcon src="user.svg" height="16px" />
          <S.Span padding="0 4px">{user ? user.fullname : "login"}</S.Span>
        </S.CustomNavLinkSmall>
      </Fragment>
    )
  }

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20} align="middle">
          <S.LogoNavLink to="/">
            <S.LogoContainer aria-label="homepage">
              <PngIcon src="logo.png" />
            </S.LogoContainer>
          </S.LogoNavLink>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  )
}

export default Header

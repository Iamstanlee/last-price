import { Col, Row } from "antd"
import * as S from "./styles"
import BalanceCard from "./BalanceCard"
import SvgIcon from "../../../common/SvgIcon"
import { useUserContext } from "../../../context/UserContext"

const Dashboard = () => {
  const {
    user: { wallet },
  } = useUserContext()
  return (
    <S.DashboardContainer>
      {/* center these */}
      <Col lg={10} md={12} sm={24} xs={24} className="margin-auto"></Col>
      <h6>Enye Hack Dashboard</h6>
      <BalanceCard balance={(wallet && wallet.balance) || ""} />
      <Row>
        <S.Span color="#000">Products</S.Span>
        <S.NavLink to="/dashboard/post-a-deal">
          <S.Span color="blue">add</S.Span>
        </S.NavLink>
      </Row>

      <SvgIcon src="activity.svg" width="100px" height="100px" />
      <S.Span>&#183; No product up for sale &#183;</S.Span>
      {/* product listing */}
    </S.DashboardContainer>
  )
}

export default Dashboard

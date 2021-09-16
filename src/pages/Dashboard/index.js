import { Col } from "antd"
import * as S from "./styles"
import BalanceCard from "./components/BalanceCard"

const Dashboard = (props) => {
  return (
    <S.DashboardContainer>
      <Col lg={10} md={12} sm={24} xs={24} className="margin-auto"></Col>
      <h6>Enye Hack Dashboard</h6>
      <BalanceCard balance={200000} />
      {/* product listing */}
    </S.DashboardContainer>
  )
}

export default Dashboard

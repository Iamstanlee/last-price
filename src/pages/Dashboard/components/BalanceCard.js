import { lazy } from "react"
import { Card } from "antd"
import { formatAmount } from "../../../utils/helpers"
import { Link } from "react-router-dom"
const Button = lazy(() => import("../../../common/Button"))

const { Meta } = Card

function BalanceCard({ balance }) {
  return (
    <Card
      style={{ width: "100%", maxWidth: 300, margin: "0 auto" }}
      actions={[
        <Link to="/dashboard/withdraw">
          <Button>Withdraw</Button>
        </Link>,
      ]}
    >
      <Meta title={formatAmount(balance)} description="balance" />
    </Card>
  )
}

export default BalanceCard

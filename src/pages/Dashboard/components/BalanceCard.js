import React from "react"
import { Card } from "antd"
import { formatAmount } from "../../../utils/helpers"
import { Button } from "../../../common/Button/styles"

const { Meta } = Card

function BalanceCard({ balance }) {
  return (
    <div>
      <Card style={{ width: 300 }} actions={[<Button>Withdraw</Button>]}>
        <Meta title={formatAmount(balance)} description="balance" />
      </Card>
    </div>
  )
}

export default BalanceCard

import Dashboard from "./components"
import PostDeal from "./components/PostDeal"
import Withdraw from "./components/Withdraw"

const routes = [
  {
    path: ["/dashboard"],
    exact: true,
    component: Dashboard,
  },
  {
    path: ["/dashboard/post-a-deal"],
    component: PostDeal,
  },
  {
    path: ["/dashboard/withdraw"],
    component: Withdraw,
  },
]

export default routes

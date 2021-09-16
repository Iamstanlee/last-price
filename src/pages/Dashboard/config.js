import Dashboard from "./components"
import PostDeal from "./components/PostDeal"

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
    component: Dashboard,
  },
]

export default routes

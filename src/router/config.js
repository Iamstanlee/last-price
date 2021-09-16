import Home from "../pages/Home"
import Product from "../pages/Product"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"

const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: Home,
  },

  {
    path: ["/deals/:id"],
    component: Product,
  },
  {
    path: ["/login"],
    component: Login,
  },
  {
    path: ["/register"],
    component: Register,
  },
  {
    path: ["/dashboard"],
    component: Dashboard,
  },
]

export default routes

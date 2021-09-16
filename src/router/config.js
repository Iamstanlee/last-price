import Home from "../pages/Home"
import Product from "../pages/Product"
import Login from "../pages/Login"
import Register from "../pages/Register"

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
]

export default routes

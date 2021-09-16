const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/deal/:id"],
    component: "Product",
  },
  {
    path: ["/login"],
    component: "Login",
  },
  {
    path: ["/register"],
    component: "Register",
  },
]

export default routes

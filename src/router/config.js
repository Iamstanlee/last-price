const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },

  {
    path: ["/deals/:id"],
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

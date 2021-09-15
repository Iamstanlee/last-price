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
]

export default routes

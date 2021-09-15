const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
//   {
//     path: ["/product"],
//     component: "ProductPage",
//   },
    {
      path: ["/deal/:id"],
      component: "ProductPage",
    },
]

export default routes

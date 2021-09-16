import { Suspense, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import routes from "./config"
import { getUser, useUserContext } from "../../context/UserContext"

const DashboardRouter = () => {
  const {
    user: { user },
    updateUserContext,
  } = useUserContext()
  useEffect(() => {
    if (!user) getUser(updateUserContext)
    // eslint-disable-next-line
  }, [])

  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={routeItem.component}
            />
          )
        })}
      </Switch>
    </Suspense>
  )
}

export default DashboardRouter

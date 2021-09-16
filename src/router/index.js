import { Suspense, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import routes from "./config"
import GlobalStyles from "../globalStyles"
import { getUser, useUserContext } from "../context/UserContext"

const Router = () => {
  const { updateUserContext } = useUserContext()
  useEffect(() => {
    getUser(updateUserContext)
  }, [])

  return (
    <Suspense fallback={null}>
      <GlobalStyles />
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

export default Router

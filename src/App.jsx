import { Route, Routes } from "react-router-dom"; 
import { connect } from "react-redux";
import routes from "./routes"
import Layout from "./layouts/layout";
import SignIn from "./pages/signIn";
import Dashboard from './pages/dashboard';
import Home from './pages/home';

function App({isLoggedIn}) {
  
  return (
    !isLoggedIn
    ? (
      <Home />
    )
    : (<>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          {
            routes.map((routes, index)=>{
              const {path, component: Component} = routes;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Component />
                  }
                />
              )
            })
          }
        </Route>
      </Routes>
    </>)
  )
}

function mapStateToProps(state){
  console.log(state)
  const {isLoggedIn} = state.auth
  return {
    isLoggedIn
  }
}
export default connect(mapStateToProps)(App)

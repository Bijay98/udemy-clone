import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import HomePage from "./pages/HomePAge/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";


const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:"/navbar",
    element:<HomePage/>
  },
  {
    path:"/main",
    element:<HomePage/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  // {
  //   path:"/dashboard",
  //   element:<AdminDashboard/>
  // }
])
function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App

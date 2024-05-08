import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute>
          <Checkout></Checkout>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5300/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivateRoute>
          <Bookings></Bookings>
        </PrivateRoute>
      }
    ],
  },

])

export default router;
import ReactDOM from 'react-dom/client'
// import Landingpage from './landingpage/landingpage'
// import Admin from './adminpage/admin'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landingpage from "./landingpage/landingpage";
import Admin from "./adminpage/admin";
import Login from "./adminpage/login";
import Terms from "./adminpage/terms";
import Registrasi from "./adminpage/registrasi";



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Landingpage />
//   </React.StrictMode>,
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/termsandcondition",
    element: <Terms />,
  },
  {
    path: "/registrasi",
    element: <Registrasi />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

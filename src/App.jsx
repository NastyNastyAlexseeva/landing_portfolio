import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
} from "react-router-dom";

import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Admin from "./Pages/Admin";

const router = createBrowserRouter([
  {
    path: "/", // позже настроить
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

const App = () => {
  return (
    <HashRouter>
        <RouterProvider router={router} />
    </HashRouter>
  );
}

export default App;

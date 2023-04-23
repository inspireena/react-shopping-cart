import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Main from './Component/Main';




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    }
  ]);

  return (
      <RouterProvider router={router} />
  )

}
export default App;

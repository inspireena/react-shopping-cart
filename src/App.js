import './App.css';

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
    <div className='app'>
      <RouterProvider router={router} />
    </div>



  )

}
export default App;

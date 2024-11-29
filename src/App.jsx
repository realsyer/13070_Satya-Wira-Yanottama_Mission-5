import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './page';
import LoginPage from './page/login';
import RegisterPage from './page/register';
import DashboardPage from './page/dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  }
]);

function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App

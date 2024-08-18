import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home/home.component";
import { ErrorPage } from "./routes/error-page/error-page";
import { Navigation } from "./routes/navigation/navigation.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        // index: true,
        path: "/",
        element: <Home />
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

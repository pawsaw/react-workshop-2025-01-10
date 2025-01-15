import { createBrowserRouter, redirect } from "react-router";
import App from "./App";
import { ErrorScreen } from "./screens/ErrorScreen";
import { BookScreen } from "./screens/BookScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { CounterScreen } from "./screens/CounterScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "books",
        element: <BookScreen />,
      },
      {
        path: "about",
        element: <AboutScreen />,
      },
      {
        path: "counter",
        element: <CounterScreen />,
      },
      {
        path: "",
        loader: () => redirect("books"),
      },
    ],
  },
]);

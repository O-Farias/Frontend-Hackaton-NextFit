import "./App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PageBemVindo from "./pages/BemVindo";
import PageTreinos from "./pages/Treinos";
import PageFinanceiro from "./pages/Financeiro"; // Importe a página de Financeiro
import { useState } from "react";
import FitDrawerHeader from "./components/FitDrawerHeader";
import FitDrawer from "./components/FitDrawer"; // Importe o FitDrawer
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import FitPrivateRoute from "./components/FitPrivateRoute";
import FitRouteNotFound from "./components/FitRouteNotFound";
import { SnackbarProvider } from "notistack";
import FitLoginRoute from "./components/FitLoginRoute";
import PageLogin from "./pages/Login";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

function App() {
  const [open, setOpen] = useState(true);

  const router = createBrowserRouter([
    {
      element: <FitPrivateRoute open={open} setOpen={setOpen} />,
      children: [
        {
          path: "/bem-vindo",
          element: <PageBemVindo />,
        },
        {
          path: "/treinos",
          element: <PageTreinos />,
        },
        {
          path: "/financeiro",
          element: <PageFinanceiro />,
        },
      ],
      errorElement: <FitRouteNotFound />,
    },
    {
      path: "/login",
      element: <FitLoginRoute />,
      children: [
        {
          path: "/login",
          element: <PageLogin />,
        },
      ],
    },
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
  ]);

  return (
    <>
      <SnackbarProvider />
      <CssBaseline />

      <Main open={open}>
        <FitDrawerHeader />
        <RouterProvider router={router} />
      </Main>
    </>
  );
}

export default App;

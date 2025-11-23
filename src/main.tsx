import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.css";
// import "../styles/bootstrap.min.css";
import "./styles/fontawesome.min.css";
import "./styles/animate.min.css";
import "./styles/flaticon.css";
import "swiper/css";
import "swiper/css/bundle";
// Global Style
import "./styles/style.css";
import "./styles/responsive.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes.tsx";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </StrictMode>
);

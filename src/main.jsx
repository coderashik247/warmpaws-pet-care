// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes";
import "aos/dist/aos.css";
import "animate.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/AuthProvider";

import AOS from "aos";
import "aos/dist/aos.css";

// এখানে useEffect লাগবে না ❌
AOS.init({
  duration: 1000,
  once: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </AuthProvider>
  </StrictMode>
);

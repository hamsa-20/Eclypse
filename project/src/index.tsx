import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopCheckout } from "./screens/DesktopCheckout/DesktopCheckout";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DesktopCheckout />
  </StrictMode>,
);

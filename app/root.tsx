import type { MetaFunction } from "@remix-run/node";
import { Toaster } from "react-hot-toast";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { GlobalStyles } from "./global/styles";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "DEV | Lucas Gonçalves",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" },
  ];
}


export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />

        {typeof document === "undefined"
          ? "__STYLES__"
          : null}
      </head>
      <body>
        <GlobalStyles />
        <Outlet />
        <Toaster />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

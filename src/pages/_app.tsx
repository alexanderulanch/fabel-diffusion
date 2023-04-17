import React from "react";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

// Polyfill for TextEncoder and TextDecoder
if (
  typeof window !== "undefined" &&
  typeof window.TextEncoder === "undefined"
) {
  const { TextEncoder, TextDecoder } = require("util");
  window.TextEncoder = TextEncoder;
  window.TextDecoder = TextDecoder;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

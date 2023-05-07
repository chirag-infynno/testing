import Loader from "@/components/Loader";
import "@/styles/globals.css";
import "@fontsource/nunito";
import { Router } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });
  Router.events.on("routeChangeError", () => {
    setLoading(false);
  });

  const getLayout = Component.getLayout || ((page) => page);
  return <>{loading ? <Loader /> : getLayout(<Component {...pageProps} />)}</>;
}

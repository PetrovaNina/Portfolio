import { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import useWindowResize from "@/functions/customHooks/useWindowResize";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { width } = useWindowResize();

  const isTouch = width <= 768;

  // useEffect(() => {
  //   if (
  //     !["en", "ru"].some((l) => l === router.query.lang) ||
  //     router.pathname === "/_error"
  //   ) {
  //     router.push(`/en`, `/en`, { locale: "en" });
  //   }
  // }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} isTouch={isTouch} />
      <Footer />
    </I18nextProvider>
  );
}

export default App;

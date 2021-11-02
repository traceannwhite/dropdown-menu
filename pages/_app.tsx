import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IdProvider } from "@radix-ui/react-id";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IdProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </IdProvider>
  );
}
export default MyApp;

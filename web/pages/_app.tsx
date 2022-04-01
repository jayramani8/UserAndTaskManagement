import "../styles/globals.css";
import type { AppProps } from "next/app";
import AdminNavbar from "../components/AdminNavbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AdminNavbar /> <Component {...pageProps} />
    </>
  );
}

export default MyApp;

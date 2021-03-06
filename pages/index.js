import Head from "next/head";
import Home from "../components/Home";
import MainScreen from "../components/MainScreen";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Parse Your CSV!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home>
        <MainScreen />
      </Home>
    </div>
  );
}

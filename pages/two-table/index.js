import Head from "next/head";
import Home from "../../components/Home";
import SecondScreen from "../../components/SecondScreen";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Parse Your CSV!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home>
        <SecondScreen />
      </Home>
    </div>
  );
}

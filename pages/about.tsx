import Head from "next/head";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Theme from "./components/Theme";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>KU2RU - about</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex flex-col items-center w-full flex-1 text-center">
        <h3 className="text-6xl font-bold logo-font">
          Ab<span className="text-green-600">ou</span>t
        </h3>
        <div className="mt-16 text-center">ABOUT</div>
      </main>

      <Footer />
    </div>
  );
}

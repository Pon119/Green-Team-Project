//_app.js (혹은 layout.js), 공통으로 사용하는 헤더, 푸터 등을 이 곳에 작성
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import TapBar from "@/component/TapBar";
import "./../styles/globals.scss";
import { Suspense } from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Header />
      <Suspense fallback={<main><div>로딩중</div></main>}>
        <main>
          <Component {...pageProps} />
        </main>
      </Suspense>
      <Footer />
      <TapBar />
    </div>
  );
}
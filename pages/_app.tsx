import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/github-markdown.css";
import "../styles/global.styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

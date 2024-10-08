import "@/styles/globals.css";
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react/ssr';
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

export default function App({ Component, pageProps }) {
  return (
    <PorscheDesignSystemProvider>
    <Component {...pageProps} />
    </PorscheDesignSystemProvider>
  )
}

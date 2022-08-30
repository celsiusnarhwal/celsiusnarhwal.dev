import '../styles/globals.css'
import Script from "next/script";

function MyApp({Component, pageProps}) {
    return (
        <div>
            <Script src={"https://kit.fontawesome.com/db4694a70a.js"} />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp

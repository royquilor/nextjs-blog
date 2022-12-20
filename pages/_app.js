import '../styles/globals.css';
import localFont from '@next/font/local'

const myFont = localFont({ src: '../public/fonts/Mona-Sans.woff2' })

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
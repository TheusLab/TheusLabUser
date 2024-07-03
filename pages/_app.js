import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/globals.module.scss';

function MyApp({ Component, pageProps }) {
    return (
        <ParallaxProvider>
            <Component {...pageProps} />
        </ParallaxProvider>
    );
}

export default MyApp;
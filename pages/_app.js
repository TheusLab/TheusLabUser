import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/global.scss'; // Importa o arquivo global.scss para estilos globais
import '../styles/globals.module.scss'; // Importa o arquivo globals.module.scss para estilos modulares

function MyApp({ Component, pageProps }) {
    return (
        <ParallaxProvider>
            <Component {...pageProps} />
        </ParallaxProvider>
    );
}

export default MyApp;
import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import CTA from '../components/CTA';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import styles from '../styles/globals.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Meu Portfólio</title>
                <meta name="description" content="Portfólio de Matheus Henrique da Silva" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <Banner />
                <About />
                <CTA />
                <Carousel />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
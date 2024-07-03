import React from 'react';
import Image from 'next/image';
import landscape from '../public/landscape.jpg';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import styles from '../styles/components/banner.module.scss';

const Banner = () => {
    return (
        <motion.div 
            className={styles.banner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Parallax y={[-20, 20]}>
                <Image src={landscape} alt="Landscape" layout="fill" className={styles.bannerImage} />
            </Parallax>
            <div className={styles.bannerText}>
                <motion.h1 
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                >
                    Olá pessoal! Sou Matheus, um entusiasta da tecnologia desde os meus 9 anos de idade.
                </motion.h1>
            </div>
        </motion.div>
    );
};

export default Banner;
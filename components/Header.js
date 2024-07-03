import React from 'react';
import Image from 'next/image';
import profilePic from '../public/profile.jpg';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/components/header.module.scss';

const Header = () => {
    return (
        <motion.header 
            className={styles.header}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className={styles.logo}>
                <Image src={profilePic} alt="Profile Picture" width={50} height={50} className={styles.profilePic} />
                <h1>Matheus Henrique da Silva</h1>
            </div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">Sobre</Link></li>
                    <li><Link href="/contact">Contato</Link></li>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Header;
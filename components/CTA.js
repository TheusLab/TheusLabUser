import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaBriefcase } from 'react-icons/fa';
import styles from '../styles/components/cta.module.scss';

const CTA = () => {
    return (
        <div className={styles.cta}>
            <motion.a 
                href="/contact"
                className={styles.ctaButton}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <FaEnvelope /> Entre em Contato
            </motion.a>
            <motion.a 
                href="/portfolio"
                className={styles.ctaButton}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <FaBriefcase /> Veja Meu Trabalho
            </motion.a>
        </div>
    );
};

export default CTA;
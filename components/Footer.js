import React from 'react';
import SocialLinks from './SocialLinks';
import styles from '../styles/components/footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Matheus Henrique da Silva. Todos os direitos reservados.</p>
            <SocialLinks />
        </footer>
    );
};

export default Footer;
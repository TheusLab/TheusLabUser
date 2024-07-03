import React from 'react';
import { FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa';
import styles from '../styles/components/socialLinks.module.scss';

const SocialLinks = () => {
    return (
        <div className={styles.socialLinks}>
            <a href="https://github.com/TheusLab" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
            </a>
            <a href="https://www.instagram.com/matheus.cs8/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
            </a>
            <a href="https://discord.com/users/_sayes" target="_blank" rel="noopener noreferrer">
                <FaDiscord size={30} />
            </a>
        </div>
    );
};

export default SocialLinks;
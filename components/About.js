import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePic from '../public/profile.jpg';
import styles from '../styles/components/about.module.scss';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className={styles.about}>
            <div className={styles.profilePicContainer} data-aos="fade-right">
                <Image src={profilePic} alt="Profile Picture" width={150} height={150} className={styles.profilePic} />
            </div>
            <div className={styles.bio} data-aos="fade-left">
                <h2>Sobre Mim</h2>
                <p>Resumo das suas experiências, habilidades e interesses. Destacar conhecimentos em diversas linguagens e tecnologias: Java, Kotlin, Bash, C#, C++, Python, JavaScript, Go, HTML, CSS, Node.js, Android Studio, Arduino, Blender, Bootstrap, PowerShell, Obsidian, npm, Next.js, MongoDB, GitHub, Git, Flask, .NET, Arch, Ubuntu, Debian, Kali, Windows, Linux. Incluir links para seus perfis em redes sociais ou projetos relevantes.</p>
            </div>
        </section>
    );
};

export default About;
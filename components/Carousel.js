import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/components/carousel.module.scss';

const skills = [
    { src: '/skills/java.png', alt: 'Java' },
    { src: '/skills/kotlin.png', alt: 'Kotlin' },
    { src: '/skills/bash.png', alt: 'Bash' },
    { src: '/skills/cs.png', alt: 'C#' },
    { src: '/skills/cpp.png', alt: 'C++' },
    { src: '/skills/py.png', alt: 'Python' },
    { src: '/skills/js.png', alt: 'JavaScript' },
    { src: '/skills/go.png', alt: 'Go' },
    { src: '/skills/html.png', alt: 'HTML' },
    { src: '/skills/css.png', alt: 'CSS' },
    { src: '/skills/nodejs.png', alt: 'Node.js' },
    { src: '/skills/androidstudio.png', alt: 'Android Studio' },
    { src: '/skills/arduino.png', alt: 'Arduino' },
    { src: '/skills/blender.png', alt: 'Blender' },
    { src: '/skills/bootstrap.png', alt: 'Bootstrap' },
    { src: '/skills/powershell.png', alt: 'PowerShell' },
    { src: '/skills/obsidian.png', alt: 'Obsidian' },
    { src: '/skills/npm.png', alt: 'npm' },
    { src: '/skills/nextjs.png', alt: 'Next.js' },
    { src: '/skills/mongodb.png', alt: 'MongoDB' },
    { src: '/skills/github.png', alt: 'GitHub' },
    { src: '/skills/git.png', alt: 'Git' },
    { src: '/skills/flask.png', alt: 'Flask' },
    { src: '/skills/dotnet.png', alt: '.NET' },
    { src: '/skills/arch.png', alt: 'Arch' },
    { src: '/skills/ubuntu.png', alt: 'Ubuntu' },
    { src: '/skills/debian.png', alt: 'Debian' },
    { src: '/skills/kali.png', alt: 'Kali' },
    { src: '/skills/windows.png', alt: 'Windows' },
    { src: '/skills/linux.png', alt: 'Linux' }
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className={styles.carousel}>
            <Slider {...settings}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.carouselItem}>
                        <Image src={skill.src} alt={skill.alt} width={100} height={100} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
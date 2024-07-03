import React from 'react';
import { FaCode, FaServer, FaCloud } from 'react-icons/fa';
import styles from '../styles/components/services.module.scss';

const Services = () => {
    return (
        <section className={styles.services}>
            <h2>Serviços</h2>
            <div className={styles.serviceList}>
                <div className={styles.serviceItem}>
                    <FaCode size={40} />
                    <h3>Desenvolvimento FullStack</h3>
                    <p>Criação de aplicações web completas, desde o frontend até o backend.</p>
                </div>
                <div className={styles.serviceItem}>
                    <FaServer size={40} />
                    <h3>DevOps</h3>
                    <p>Automatização e gerenciamento de infraestrutura de TI utilizando as melhores práticas.</p>
                </div>
                <div className={styles.serviceItem}>
                    <FaCloud size={40} />
                    <h3>Consultoria em Nuvem</h3>
                    <p>Planejamento e migração de aplicações para ambientes de nuvem.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
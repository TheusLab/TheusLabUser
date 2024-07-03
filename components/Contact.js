import styles from '../styles/components/contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contato</h2>
      <form action="https://formspree.io/f/mqazkldl" method="POST">
        <input type="text" name="name" placeholder="Seu Nome" required />
        <input type="email" name="email" placeholder="Seu Email" required />
        <textarea name="message" placeholder="Sua Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <p>Email: <a href="mailto:codelong@proton.me">codelong@proton.me</a></p>
      <p>Discord: <a href="https://discord.com/users/_sayes">_sayes</a></p>
      <p>GitHub: <a href="https://github.com/TheusLab">TheusLab</a></p>
      <p>Instagram: <a href="https://instagram.com/matheus.cs8">matheus.cs8</a></p>
    </section>
  );
}

export default Contact;

import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact container">
      <h2>Contato</h2>

      <p>
        Interessado em trabalhar comigo ou trocar uma ideia? Me chama!
      </p>
      <p>
  Estou aberta a oportunidades, projetos e colaborações.
  Entre em contato comigo pelos canais abaixo.
</p>

      <div className="contact-links">
        <a href="ftiveron@hotmail.com">Email</a>
        <a href="https://www.linkedin.com/in/fernanda-tiveron/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/FernandaTiveron" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
import styles from './Contatos.module.css'
import { GoMail } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Contatos() {
  return (
    <section className={styles.contatos}>
    <h3>Entre em contato</h3>
    <p>Para que possamos conversar mais sobre.</p>
    
    <div className={styles.icones}>
    <figure>
       <img className={styles.img_contatos} src="/contacts.svg" alt="Imagem de Contatos" />
     </figure>
     
     <a href="mailto:lucas.rodrigues.caslu@gmail.com" target="_blank" rel="noopener noreferrer"><GoMail className={styles.icone}/></a>
     
     <a href="https://www.instagram.com/lucasmarques676/" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.icone}/></a>
     
     <a href="https://github.com/Lucas-marques98" target="_blank" rel="noopener noreferrer"><FaGithub className={styles.icone}/></a>

     <a href="https://www.linkedin.com/in/lucas-marques-8b040b169/" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.icone}/></a>
    </div>
    </section>
  )
}

export default Contatos;
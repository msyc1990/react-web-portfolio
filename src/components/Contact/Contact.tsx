import contactImage from './assets/contact.png';
import s from './Contact.module.css';

const Contact = () => {
  return (
    <section className={`${s.container} min-h-[90vh]`}>
      <div className={s.imageCard}>
        <img 
          src={contactImage} 
          alt="Kontakt" 
        />
      </div>

      <div className={s.contactContainer}>
        <p className='text-6xl text-sky-500 font-bold p-3'>Contact</p>

        <div className={s.contactText}>
          <p className='text-3xl'>
            Dziękuję za odwiedzenie mojej strony! Jeśli jesteś zainteresowany współpracą lub po prostu chcesz się ze mną skontaktować, zapraszam do wysłania wiadomości na mój adres e-mail.Postaram się odpowiedzieć jak najszybciej. Do usłyszenia.
          </p>
        </div>

        <div className={s.messageContainer}>
          <form action=".">
            <input type="text" name="firstname" id="name" placeholder='name' />
            <input type="email"  id="email" placeholder='name@email.com' />
            <textarea name="text" id="text"></textarea>
            <button type="button" className={s.btn}>Wyslij</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
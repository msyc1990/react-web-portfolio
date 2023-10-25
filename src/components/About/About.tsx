import photo from './assets/Photo.jpg';
import { DiCss3, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import s from './About.module.css';

const About = () => {
  return (
    <section className={s.container}>
        <div className={s.imageContainer}>
            <div className={s.borderImg}>
                <img
                    className={s.photo} 
                    src={photo} 
                    alt="Photo" 
                />
            </div>
        </div>
        <div className={s.contentContainer}>
            <div className={s.title}>
                <p className='text-6xl'>Kilka słów o sobie</p>
            </div>
            
            <div className={s.contentText}>
                <p className='text-3xl'>
                    Witaj na mojej stronie internetowej! Jestem Michał, a frontend to moja pasja.
                    Fascynuje mnie to, jak za pomocą kodu można przekształcać pomysły w wirtualną rzeczywistość, która może zaskakiwać, inspirować i ułatwiać życie użytkownikom.
                    Nieustannie śledzę najnowsze trendy i technologie w świecie frontendu, aby być na bieżąco z możliwościami, jakie niesie rozwijająca się branża. Jestem przekonany, że edukacja i rozwijanie swoich umiejętności są kluczem do sukcesu w programowaniu.
                </p>
            </div>

            <div className={s.title}>
                <p className='text-6xl'>Znajomość Technologi</p>
            </div>

            <div className={s.techContainer}>
                <div className={s.techItem}>
                    <DiHtml5 size={75} />
                    <span>Html</span>
                </div>

                <div className={s.techItem}>
                    <DiCss3 size={75} />
                    <span>Css</span>
                </div>

                <div className={s.techItem}>
                    <DiJavascript size={75} />
                    <span>Js</span>
                </div>

                <div className={s.techItem}>
                    <DiReact size={75} />
                    <span>React</span>
                </div>
            </div>

            <div className={s.quoteContainer}>
                <p className='text-5xl font-extrabold'><strong>&rdquo;</strong> Hard work beats talent</p>
                <p className='text-5xl font-extrabold'>when talent doesn't work hard <strong>&bdquo;</strong></p>
            </div>
        </div>
    </section>

  )
}

export default About
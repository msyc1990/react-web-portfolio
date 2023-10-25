import Home from './assets/home.png';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGit } from "react-icons/fa6";
import s from './Main.module.css';

const Main = () => {
  return (
    <section className={s.container}>
      <div className={s.image}>
        <img 
          className={s.mainImage}
          src={Home} 
          alt="Home"
        />
      </div>


      <header className={s.header}>
        <h1>Michał Syc</h1>
        <p className='text-sky-500'>Frontend <span className='text-slate-300'>Developer</span></p>

        <div className={`${s.text} text-slate-500 text-5xl tracking-wider`}>
          <p className='mr-20'>
            Create, modern
          </p>
          <p className='relative z-0'>
            interactive web <span className='text-sky-500 font-bold text-9xl absolute -bottom-14'>Art.</span>
          </p>
        </div>
    
        <button className={s.btnProject}>Projects</button>

        <div className={s.icons}>
          <a href="#" target="_blank">
            <FaLinkedin  size={45} />
          </a>

          <a href="#" target="_blank">
            <FaSquareGit size={45} />
          </a>
        </div>

      </header>
    </section>
  )
}

export default Main
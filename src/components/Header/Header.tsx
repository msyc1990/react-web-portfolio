import s from './Header.module.css';
import { useState } from 'react';

 const  Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenuIcon = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <nav className={s.navBar}>
        <div className={s.logo}>
            <p className='text-5xl text-slate-300'>Web<span className='px-2 mx-1 text-sky-500'>Dev</span></p>
        </div>

        <ul className={`${s.menu} ${menuOpen ? s.open : ''}`}>
            <li className='text-3xl font-bold tracking-widest'>Home</li>
            <li className='text-3xl font-bold tracking-widest'>O mnie</li>
            <li className='text-3xl font-bold tracking-widest'>Portfolio</li>
            <li className='text-3xl font-bold tracking-widest'>Kontakt</li>
        </ul>

        <button className={`${s.menuIcon} ${menuOpen ? s.close : ''}`}  onClick={toggleMenuIcon}>
            <div className={s.line}></div>
            <div className={s.line}></div>
            <div className={s.line}></div>
        </button>
    </nav>
  )
}

export default Header

import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.container}>
        <p className='text-3xl'>&copy; All rights reserved. | <span className='text-sky-500 font-semibold'>Michał Syc</span> 2023</p>
    </footer>
  )
}

export default Footer
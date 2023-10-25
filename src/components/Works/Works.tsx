import Example from './assets/exampleImage.jpg';
import { IoCodeSlashSharp, IoCodeDownload } from "react-icons/io5";
import s from './Works.module.css';
import { useState } from 'react';


interface ProjectProps {
  image: string;
  type: string;
  title: string;
  info: string;
  tech: string;
  url: string;
  id: number;
}

const Project = ({
  image,
  type,
  title,
  info,
  tech,
  id,
  url,
}: ProjectProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article className={s.projectCard}>
      <div className={s.image}>
        <span className='text-2xl font-bold'>#{id}</span>
        <img 
          src={image} 
          alt={title} 
          />
      </div>

      <div className={s.projectInfo}>
        <p>
          Typ: <span className='text-sky-500'>{type}</span>
        </p>

        <div className={s.projectDetail}>
          <p>Tytuł: <span className='text-slate-500'>{title}</span></p>
          <p>Opis: <span className='text-slate-500'>{info}</span></p>
          <p>Tech: <span className='text-slate-500'>{tech}</span></p>
        </div>

        <a 
          href={url} 
          target='_blank'
          className={s.icon}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? <IoCodeDownload size={25} color='rgb(14, 165, 233)'/> : <IoCodeSlashSharp  size={25} color='rgb(14, 165, 233)'/>}
        </a>

      </div>
    </article>
  )
}

const Works = () => {
  const projects = [
    {
      image: Example,
      type: 'WWW',
      title: 'Tytuł projektu',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      tech: 'Html, Css, JavaScript, React',
      url: 'https://github.com/msyc1990/msyc1990',
      id: 1,
    },
    {
      image: Example,
      type: 'WWW',
      title: 'Tytuł projektu',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      tech: 'Html, Css, JavaScript, React',
      url: 'https://github.com/msyc1990/msyc1990',
      id: 2,
    },
    {
      image: Example,
      type: 'WWW',
      title: 'Tytuł projektu',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      tech: 'Html, Css, JavaScript, React',
      url: 'https://github.com/msyc1990/msyc1990',
      id: 3,
    },
    {
      image: Example,
      type: 'WWW',
      title: 'Tytuł projektu',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing',
      tech: 'Html, Css, JavaScript, React',
      url: 'https://github.com/msyc1990/msyc1990',
      id: 4,
    },
  ];
  return (
    <section className={s.container}>
        <header className={s.title}>
          <p className='text-6xl'>Projekty:</p>
          <p className='text-6xl text-slate-500'>Interactive web <span className='text-6xl text-sky-500 font-bold'>Art</span></p>
        </header>

        <div className={s.projectContainer}>
          {projects.map((project, index) => (
            <Project 
              key={index}
              image={project.image}
              title={project.title}
              info={project.info}
              type={project.type}
              tech={project.tech}
              url={project.url}
              id={project.id}
            />
          ))}
        </div>
    </section>
  )
}

export default Works
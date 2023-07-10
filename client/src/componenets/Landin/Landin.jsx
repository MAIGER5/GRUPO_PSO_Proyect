import styles from './Landin.module.css'
import imageLandin from '../../utils/imageLandin.jpg'
import { Button, Typography } from '@mui/material'
import '@fontsource-variable/raleway';
import { Link } from 'react-router-dom';
import ButtonContainer from './ButtonContainer';


export const Landin = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.container}>
        <div className={styles.degradado}></div>
        <img src={imageLandin} alt="" className={styles.fondo}/>
        <div className={styles.fuente}
        >Grupo Empresarial PSO</div>

        <div className={styles.fuente2}>Prevenir Servir Orientar</div>
        <Link to={'/home'} >
          <ButtonContainer/>
        </Link>
      </div>
    </div>
  )
}

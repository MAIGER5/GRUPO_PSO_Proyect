import {Box, Button, Grid, Typography, colors, useTheme} from '@mui/material'
import '@fontsource/noto-sans-hk';
import styles from './Navbar.module.css'
import Face4Icon from '@mui/icons-material/Face4';
import pso from '../../utils/pso.png'
import { Link, useLocation } from 'react-router-dom';

import Preambulo from './Preambulo';




export const Navbar = () => {

  const location = useLocation();
  const rutaHome = '/home';
  const rutaPrincipal = '/';



  return (
    <div className={styles.navbar}>
      <Preambulo/>

      <div className={styles.navbar}>
        <Link to={'/'}>
          <img className={styles.logoPso} src={pso} alt='logo' />
        </Link>
        <div className={styles.menu}>
          <Button component={Link} to='/home' >
            <Typography fontSize={'15px'} color={ location.pathname === rutaHome || location.pathname === rutaPrincipal? '#ffc93c': '#113f67'} fontWeight={'bold'} fontFamily={['PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;']} > Inicio </Typography>
          </Button >
          <Button component={Link} to='/abaut'>
            <Typography fontSize={'15px'} color={ location.pathname === rutaHome || location.pathname === rutaPrincipal? '#ffc93c': '#113f67'} fontWeight={'bold'} fontFamily={['PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;']} marginLeft={'20px'} > Acerca de </Typography>
          </Button>
          {/* <Button>
            <Typography fontSize={'15px'} color={ location.pathname === rutaHome || location.pathname === rutaPrincipal? '#ffc93c': '#113f67'} fontWeight={'bold'} fontFamily={['PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;']} marginLeft={'20px'} > Servicios </Typography>
          </Button> */}
          <Button component={Link} to='/contact' >
            <Typography fontSize={'15px'} color={ location.pathname === rutaHome || location.pathname === rutaPrincipal? '#ffc93c': '#113f67'} fontWeight={'bold'} fontFamily={['PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;']}marginLeft={'20px'} > Contacto </Typography>
          </Button>
        </div>
        <div className={location.pathname === rutaHome || location.pathname === rutaPrincipal? styles.login1: styles.login2}>
          <Button > <Typography fontSize={15} color={ location.pathname === rutaHome || location.pathname === rutaPrincipal? '#ffc93c': '#ffff'} fontWeight={'bold'} fontFamily={['PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;']} marginRight={'20px'}> LOGIN </Typography> <Face4Icon /></Button>
        </div>
      </div>
    </div>
  )
}

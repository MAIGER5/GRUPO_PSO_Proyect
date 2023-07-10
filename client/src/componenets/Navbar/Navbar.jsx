import {Box, Button, Grid, Typography, colors} from '@mui/material'
import '@fontsource/noto-sans-hk';
import styles from './Navbar.module.css'
import Face4Icon from '@mui/icons-material/Face4';
import pso from '../../utils/pso.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import { Link, useLocation } from 'react-router-dom';




export const Navbar = () => {

  const location = useLocation();
  const rutaHome = '/home';
  const rutaPrincipal = '/';

  return (
    <div className={styles.navbar}>
      <div className={styles.preambulo}>
        <Typography className={styles.telefono}> <LocalPhoneIcon/> 604 4623978 </Typography>
        <div className={styles.espacio}></div>
        <div className={styles.iconPreambulo}>
          <Button><TwitterIcon /></Button>
          <Button><InstagramIcon sx={{marginLeft:'20px'}}/></Button>
          <Button><FacebookIcon sx={{marginLeft:'20px'}}/></Button>
        </div>
        <div className={styles.dark}>
          <Button><Brightness6Icon/></Button>
        </div>
      </div>
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

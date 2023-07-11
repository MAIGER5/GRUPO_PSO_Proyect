import {Box, Button, Grid, Typography, colors, useTheme} from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import styles from './Navbar.module.css'
import { useContext } from 'react';
import { ColorModeContext } from '../ColorMode/ColorMode';

export default function Preambulo() {
  // Modo Dark/Ligth
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const themeMode = theme.palette.mode === "light" ? "black" : "white";

    return (
        <> <div className={styles.preambulo}>
            <Typography style={{ color: 'white' }} className={styles.telefono}> <LocalPhoneIcon/> 604 4623978 </Typography>

            <div className={styles.espacio}></div>

            <div className={styles.iconPreambulo}>
            <Button sx={{ height: '28px' }}><TwitterIcon sx={{ marginLeft: '10px', marginRight: '10px' }} /></Button>
            <Button sx={{ height: '28px' }}><InstagramIcon sx={{ marginLeft: '10px', marginRight: '10px' }} /></Button>
            <Button sx={{ height: '28px' }}><FacebookIcon sx={{ marginLeft: '10px', marginRight: '10px' }} /></Button>
            </div>

            {/* Mode Dark/Ligth */}
            <div className={styles.dark}>
                <Button sx={{ height: '28px' }} onClick={colorMode.toggleColorMode} >
                {theme.palette.mode === "dark" ? ( <Brightness6Icon color="primary" /> ) : ( <Brightness5Icon color="primary" /> )}
                </Button>
            </div>
      </div> </>

    )
}
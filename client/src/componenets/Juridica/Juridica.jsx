import styles from './Juridica.module.css'
import { Grid, Typography } from '@mui/material'
import { JuridicaCard } from './JuridicaCard'
import logo from '../../utils/LogoDHS.png'
import {useNavigate } from 'react-router-dom'
import { JuridicaCard2 } from './JuridicaCard2'
import dhsLogo from '../../utils/LogoJuridicav2.png'
import { JuridicaServiceMapeo } from './JuridicaServiceMapeo'


export const Juridica = () => {

    const navigation = useNavigate();

    const handleLinked = ()=>{
      navigation('/home')
    }

  return (

    <div className={styles.dhsPrincipal} >
        <JuridicaCard/>
        <Grid container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            position:'absolute',
            // border:'10px solid red',
            zIndex:1,
            width:'100vw',
            height:'62.5rem'
          }}>
          <img src={logo} alt='LogoDHS' width={'18.75rem'} />
          <Typography color={'#393e46'} variant='h3'
            sx={{
              fontFamily:'sans-serif',
              fontWeight:'bold',
              zIndex:1
            }}
          >JURIDICA & CONSULTORIA</Typography>
          <Typography color={'#ffff'} variant='h4'
            sx={{
              fontFamily:'sans-serif',
              fontWeight:'bold',
              zIndex:1
            }}
          >AUBAD BETANCOURT GOMEZ</Typography>
          <Typography color={'#ffff'} variant='h6' align='center'
            sx={{
              fontFamily:'<span className="ai-bike"></span>',
              fontWeight:'AGENCIA',
              zIndex:1,
              width:'62.5rem',
              marginTop:'3rem'
            }}
          >Nuestro compromiso es brindar asesoramiento y representación legal a empleados y sindicatos, asegurándonos de que se cumplan las leyes laborales y se respeten los derechos laborales.</Typography>

          <Typography className={styles.descubre} onClick={handleLinked}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            // border={'2px solid red'}
            color={'#ffff'}
            marginTop={'3.4375rem'}
            borderRadius={'0.5625rem'}
            width={'18.75rem'}
            height={'3.125rem'}
            fontWeight={'bold'}
            variant='Button'

          >Descubre Nuestras Soluciones</Typography>
        </Grid>
        <JuridicaCard2/>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          // border={'1px solid green'}
          marginTop={'75.5rem'}
          marginLeft={'12.5rem'}
          sx={{
            height:'15.25rem',
            width:'80%'
          }}
        >
          <Grid className={styles.logo}>
            <img src={dhsLogo} alt="dhsLogo" />
          </Grid>
          <Grid>
            <Typography color={'#393e46'} variant='h6'
              sx={{
              fontFamily:'sans-serif',
              fontWeight:'bold',
              marginLeft:'3rem'
              // marginTop:'75rem',
              // marginLeft:'6.25rem',
              // width:'40%',
              }}
            >ESPECIALISTA EN LO QUE HACEMOS.</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={'center'}>
          <JuridicaServiceMapeo/>
        </Grid>
    </div>
  )
}

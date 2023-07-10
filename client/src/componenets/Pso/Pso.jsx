import styles from './Pso.module.css'
import { Grid, Typography } from '@mui/material'
import logo from '../../utils/LogoDHS.png'
import {useNavigate } from 'react-router-dom'
import {PsoCard2 } from './PsoCard2'
import dhsLogo from '../../utils/LogoPSO.png'
import {PsoServiceMapeo } from './PsoServiceMapeo'
import { PsoCard } from './PsoCard'


export const Pso = () => {

    const navigation = useNavigate();

    const handleLinked = ()=>{
      navigation('/home')
    }

  return (
    
    <div className={styles.dhsPrincipal} >
        <PsoCard/>
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
          >PSO</Typography>
          <Typography color={'#393e46'} variant='h3' 
            sx={{
              fontFamily:'sans-serif',
              fontWeight:'bold',
              zIndex:1
            }}
          >PREVENCION SEGURIDAD OCUPACIONAL</Typography>
          <Typography color={'#393e46'} variant='h6' align='center'
            sx={{
              fontFamily:'<span className="ai-bike"></span>',
              fontWeight:'AGENCIA',
              zIndex:1,
              width:'62.5rem',
              marginTop:'3rem'
            }}
          >Nuestro equipo técnico está comprometido con la seguridad industrial y la salud de sus trabajadores. La prevención de accidentes laborales es fundamental para garantizar un entorno de trabajo seguro y saludable..</Typography>
          
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
        <PsoCard2/>
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
              // marginTop:'75rem',
              // marginLeft:'6.25rem',
              // width:'40%',
              }}
            >SISTEMAS DE GESTION INTEGRADOS.</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={'center'}>
          <PsoServiceMapeo/>
        </Grid>
    </div>
  )
}

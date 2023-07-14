import styles from './Sein.module.css'
import { Grid, Typography } from '@mui/material'
import { SeinCard } from './SeinCard'
import logo from '../../utils/LogoDHS.png'
import {useNavigate } from 'react-router-dom'
import { SeinCard2 } from './SeinCard2'
// import { DhsServices } from './SeinServices'
import dhsLogo from '../../utils/LogoSEINv2.png'
import { SeinServiceMapeo } from './SeinServiceMapeo'
import { useEffect } from 'react'


export const Sein = () => {

  const navigate = useNavigate();

    const handleLinked = ()=>{
      navigate('/home')
    }

  return (

    <div className={styles.dhsPrincipal} >
        <SeinCard/>
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
          >SEIN</Typography>
          <Typography color={'#393e46'} variant='h3'
            sx={{
              fontFamily:'sans-serif',
              fontWeight:'bold',
              zIndex:1
            }}
          >PSO EXTINTORES Y SEGURIDAD INDUSTRIAL</Typography>
          <Typography color={'#393e46'} variant='h5' align='center'
            sx={{
              fontFamily:'<span className="ai-bike"></span>',
              fontWeight:'AGENCIA',
              zIndex:1,
              width:'62.5rem',
              marginTop:'3rem'
            }}
          >Manténte seguro “Garantiza la seguridad de tu personal y la continuidad de tu negocio”.</Typography>

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
        <SeinCard2/>
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
            >SU SEGURIDAD ES NUESTRO COMPROMISO.</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={'center'}>
          <SeinServiceMapeo/>
        </Grid>
    </div>
  )
}

import React, { useEffect } from "react"
import styles from "./home.module.css"
import { HomeCard } from "./HomeCard"
import { Box, Button, Grid, Typography } from "@mui/material"
import { CardDHS } from "./CardCompany/CardDHS"
import { CardSEIN } from "./CardCompany/CardSEIN"
import { CardPSO } from "./CardCompany/CardPSO"
import { CardJuridica } from "./CardCompany/CardJuridica"
import '@fontsource/dancing-script/500.css';
import { useNavigate } from "react-router-dom"
import { Objetivos } from "../Objetivos/Objetivos"



export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.todoVista}>
        <div className={styles.centrado}>
          <HomeCard />
        </div>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginBottom={5}
          marginTop={5}
          // sx={{border: '1px solid black'}}

          >
          <Grid sx={{height:'10em', width:'15.625em', maxHeight:'93.75em'}}>
            <Typography align="center" sx={{verticalAlign: 'top', }} color={"#113f67"} fontWeight={'bold'} fontSize={23} >Bienvenidos!</Typography>
            <Box sx={{
              fontWeight:'bold',
              display:'flex',
              width:'100%',
              justifyContent:'center',
              marginTop:2,
              }}
            >
              <Button sx={{border: '1px solid #247291', borderRadius:10, width:'8.75em'}} > <Typography color={'#247291'} fontSize={'0.8125em'}>VER MAS</Typography>  </Button>
            </Box>
          </Grid>
          <Grid  sx={{ width:'37.5em', height:'10em', marginInline:'9.375em'}}>
            <Typography color={"#113f67"} align="center" variant="subtitle2"  fontWeight={'bold'} >Somos un grupo de aliados estratégicos de diversas empresas en la prevención y gestión de riesgos, dispuestos a asesorarte en tus diversos procesos.!</Typography>
            <Typography sx={{fontSize:'0.8125em'}} color={"#247291"} align="center" marginTop={2} >El GRUPO PSO es un conjunto de seis (6) empresas para PREVENIR, SERVIR y ORIENTAR (PSO), con administración autónoma e independientes unas de las otras, que se dedican a diversas actividades económicas e industriales ofreciendo un acompañamiento integral para sus empresas clientes.!</Typography>
          </Grid>
          <Grid sx={{height:'160px', width:'250px'}}>
            <Typography color={"#247291"} align="center" >Gerente Grupo Empresarial</Typography>
            <Typography fontFamily="Dancing Script" color={"red"} align="center" fontSize={'1.5625em'}>Aubad Estleman Gomez!</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent={"center"} marginTop={2}
        >
          <Grid className={styles.cartasCompany}>
            <CardDHS/>
          </Grid>
          <Grid className={styles.cartasCompany}>
            <CardSEIN/>
          </Grid>
          <Grid className={styles.cartasCompany}>
            <CardPSO/>
          </Grid>
          <Grid className={styles.cartasCompany}>
            <CardJuridica/>
          </Grid>
        </Grid>

        <Objetivos/>
    </div>
  )
}

import React from 'react'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

export const SeinCard2 = () => {
  return (
    <Grid container
        sx={{
            position:'absolute',
            display:'felx',
            justifyContent:'center',
            width:'100%',
            // border:'1px solid blue',
            marginTop:'56.25em'
            
        }}
    >
        <Card 
            sx={{
                display:'flex',
                alignItems:'center',
                width:'70%',
                borderRadius:3,
                border: '0.3125em solid white',
                background:'#ffff',
                boxShadow:'none'
                
                
            }}
        >
            <CardMedia
                component='img'
                image='https://iasetraining.org/wp-content/uploads/2021/06/tuv-rheinland-preventive-fire-protection_core_4_3.jpeg'
                sx={{width:'21.875em',
                    height:'15.625em',
                }}
                
            />
            <Box 
                sx={{
                    // border: '2px solid green',
                    width:'53.125rem',
                    marginLeft:3,

                }}
            >
                <CardContent>
                    <Typography>Nuestra empresa se preocupa por la seguridad y el mantenimiento oportuno de los equipos y redes contraincendios. La seguridad es un aspecto crucial para nosotros, y contar con un mantenimiento adecuado de los equipos y redes contraincendio es fundamental para garantizar la protección contra incendios y la seguridad de las personas y las propiedades.</Typography>
                    <Typography marginTop={'25px'}>Mantener los equipos contraincendio en condiciones óptimas es esencial para su correcto funcionamiento en caso de emergencia. Esto implica realizar inspecciones regulares, pruebas y mantenimiento preventivo de los sistemas, como alarmas de incendio, rociadores, extintores y otros dispositivos de detección y supresión de incendios.</Typography>
                </CardContent>
            </Box>
        </Card>
    </Grid>
  )
}

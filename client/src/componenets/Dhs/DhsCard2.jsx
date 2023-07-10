import React from 'react'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import dhsTarjeta from '../../utils/yyyy.jpg'

export const DhsCard2 = () => {
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
                width:'50%',
                borderRadius:3,
                border: '0.3125em solid white',
                background:'#ffff',
                boxShadow:'none'
                
                
            }}
        >
            <CardMedia
                component='img'
                image={dhsTarjeta}
                sx={{width:'21.875em',
                    height:'15.625em',
                }}
                
            />
            <Box 
                sx={{
                    // border: '2px solid green',
                    width:550,
                    marginLeft:3,

                }}
            >
                <CardContent>
                    <Typography>Nuestro capital técnico y humano cuenta con la idoneidad para el manejo de riesgos corporativos y conexos, por lo que uno de nuestros objetivos principales es convertirnos en aliados desde la intermediación garantizando a nuestros clientes la mejor oferta comercial. Para esto auditamos constantemente y mantenemos los canales de comunicación entre las aseguradoras y nuestros clientes.</Typography>
                </CardContent>
            </Box>
        </Card>
    </Grid>
  )
}

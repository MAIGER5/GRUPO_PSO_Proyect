import React from 'react'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import dhsTarjeta from '../../utils/yyyy.jpg'

export const PsoCard2 = () => {
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
                // border: '0.3125em solid white',
                padding: 1,
                // background:'#ffff',
                boxShadow:'none'


            }}
        >
            <CardMedia
                component='img'
                image='https://www.avetta.com/sites/default/files/2022-07/Canada%20Act%20to%20Modernize%20the%20Occupational%20Health-Safety%20Regime.png'
                sx={{width:'21.875em',
                    height:'15.625em',
                }}

            />
            <Box
                sx={{
                    // border: '2px solid green',
                    width:'34.375rem',
                    marginLeft:3,

                }}
            >
                <CardContent>
                    <Typography>Recuerda que la seguridad industrial y la salud de los trabajadores deben ser un compromiso constante. Mantener una cultura de seguridad en el lugar de trabajo es fundamental para prevenir accidentes laborales y garantizar la disponibilidad de los servicios.</Typography>
                </CardContent>
            </Box>
        </Card>
    </Grid>
  )
}

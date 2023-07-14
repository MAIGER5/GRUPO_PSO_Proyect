import React from 'react'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

export const JuridicaCard2 = () => {
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
                width:'75%',
                borderRadius:3,
                // border: '0.3125em solid white',
                padding: 1,
                // background:'#ffff',
                boxShadow:'none'


            }}
        >
            <CardMedia
                component='img'
                image='https://img.freepik.com/premium-photo/construction-labor-law-concept-judges-gavel-with-yellow-hard-hat_488220-61187.jpg'
                sx={{width:'21.875em',
                    height:'15.625em',
                    marginLeft:'9px',
                    borderRadius:'0.625rem 0rem'
                }}

            />
            <Box
                sx={{
                    // border: '2px solid green',
                    width:750,
                    marginLeft:3,

                }}
            >
                <CardContent>
                    <Typography>Nuestro objetivo principal es garantizar que los trabajadores tengan condiciones laborales justas y seguras, así como el acceso a salarios adecuados, horas de trabajo razonables y beneficios laborales. Trabajamos para prevenir y abordar situaciones de discriminación, acoso o represalias en el lugar de trabajo.</Typography>
                    <Typography marginTop={'1.25rem'}>Nuestro equipo de especialistas en derecho laboral está actualizado sobre las leyes laborales y las regulaciones vigentes, lo que nos permite brindar un asesoramiento legal sólido y representación efectiva en caso de litigios. Valoramos la justicia y la equidad en el ámbito laboral y nos esforzamos por proteger y promover los derechos de los trabajadores en todas las situaciones laborales.</Typography>
                </CardContent>
            </Box>
        </Card>
    </Grid>
  )
}

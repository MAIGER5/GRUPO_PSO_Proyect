import { Avatar, Grid, Typography } from "@mui/material"
import { deepOrange } from "@mui/material/colors"


export const Objetivos = () => {
  return (
    <Grid   container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={9}


    >
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="start" spacing={2} sx={{
            marginTop:'11.25rem',
            // border: '1px solid red',
            width:'87.5rem',
            height:'29rem',

        }}>
            <Grid item xs={6} md={4}
                sx={{
                    border:'1px solid red',
                    width:'18.75rem',
                    height:'18.75rem',
                    border:'0.625rem'}}>
                <Typography fontSize="2.5rem"
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:"center"
,                       width:'28.125rem',
                        height:'18.75rem',
                    }}   align="center" fontWeight={'bold'} color={'#113f67'}>NUESTRO OBJETIVO ES!</Typography>
            </Grid>
            <Grid item xs={4} md={8}   container
                direction="column"
                justifyContent="center"
                alignItems="center"

                sx={{
                    background:'#d5def5',
                    width:'56.25rem',
                    height:'25rem',
                    borderRadius:3,
                }}
            >

                <Grid   container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{
                        // border:'1px solid black',
                        width:'59.375rem',
                        marginBottom:5,
                        marginLeft:4
                    }}

                >
                    <Avatar sx={{ bgcolor: '#ff5722',width:'6.25rem', height:'6.25rem' }} variant="square">
                    <Typography fontSize="3.75rem"
                                sx={{
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:"center"
,                                    width:'6.25rem',
                                    height:'6.25rem',
                                }}


                            >1</Typography>
                    </Avatar>
                    <Typography
                        sx={{
                            // border:'1px solid black',
                            width:'37.5rem',
                            marginLeft:5
                        }}
                        color={'#113f67'}>Que las empresas clientes se dediquen en un 100% a su objeto social y dejen en nuestras manos las otras responsabilidades de tipo administrativo, OPTIMIZANDO tiempo, recursos humanos, técnicos y económicos.</Typography>

                </Grid>

                <Grid   container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{
                        // border:'1px solid black',
                        width:'59.375rem',
                        marginBottom:5,
                        marginLeft:4
                    }}

                >
                    <Avatar sx={{ bgcolor: '#ff5722',width:'6.25rem', height:'6.25rem' }} variant="square">
                    <Typography fontSize="3.75rem"
                                sx={{
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:"center"
,                                    width:'6.25rem',
                                    height:'6.25rem',
                                }}


                            >2</Typography>
                    </Avatar>
                    <Typography
                        sx={{
                            // border:'1px solid black',
                            width:'37.5rem',
                            marginLeft:5
                        }}
                        color={'#113f67'}>Que a traves de nuestro equipo de profesionales interdisciplinarios especializados en diferentes áreas de Sistemas de Gestión, Seguridad Industrial, Derecho Corporativo, especialmente en el área Laboral y Seguridad Social, Seguros Generales e Intermediación de ARL y  Reparaciones e Infraestructura, podamos contribuir a la gestion y organizacion de estos procesos y asi coadyudar al crecimiento de su empresa.</Typography>

                </Grid>

            </Grid>
        </Grid>
    </Grid>
  )
}

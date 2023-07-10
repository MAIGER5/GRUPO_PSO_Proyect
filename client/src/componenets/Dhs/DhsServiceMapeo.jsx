import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { DhsServices } from './DhsServices'


const ServiceDHS = [
    {
        id: 1,
        title: "INTERMEDIARIOS EXPERTOS EN RIESGOS LABORALES",
        description: ['Batería de riesgo psicosocial', 'Seguridad industrial', 'Software de gestión', 'Capacitaciones', 'Asesorías'],
        imageService:'https://elperuano.pe/fotografia/thumbnail/2022/08/16/000200729M.jpg',
    },
    {
        id: 2,
        title: "SEGUROS PERSONAS INDIVIDUAL Y COLECTIVO",
        description: ["Poliza de salud", "Medicina prepagada"],
        imageService:'https://w6h5e3r8.rocketcdn.me/wp-content/uploads/2023/06/Las-personas-con-discapacidad-pueden-acceder-a-dos-programas-del-Seguro-Social-1-1140x703.webp',
    },
    {
        id: 3,
        title: "SEGUROS DE ACCIDENTES PERSONALES",
        description: ['Seguros de Vida', 'Seguros para personas' ],
        imageService:'https://www.enelx.com/content/dam/local-peru/seguro-accidentes.jpg',
    },
    {
        id: 4,
        title: "SEGUROS GENERALES",
        description: ['Todo riesgo construcción', 'Poliza de cumplimiento', 'Multiriesgos o PYME', 'Vehículos (Individual y colectivo)'],
        imageService:'https://www.abogados.com/sites/default/files/styles/_750px_x_500px_/public/wp-content/uploads/accidente-de-auto.jpg?itok=FmxOSe_h',
    }
]

export const DhsServiceMapeo = () => {
  return (
    <Stack spacing={6} container direction={'row'} justifyContent={'center'} alignItems={'center'}
    sx={{ 
        width:'90%',
        // padding:'0rem',
        // display:'flex',
        // flexWrap:'wrap',
        // justifyContent:'space-between',
        // alignItems:'center',
        // height:'65.625rem',

        // border:'1px solid red'
    }}
    >
        {ServiceDHS.map((servicio) => (
            <DhsServices
                key={servicio.id}
                id={servicio.id}
                title={servicio.title}
                imgCard={servicio.imageService}
                description={servicio.description.map((ele)=> (
                    <Typography>{ele}</Typography>
                ))}
            />
        ))}
    </Stack>
  )
}

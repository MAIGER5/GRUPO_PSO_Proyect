import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { SeinServices } from './SeinServices'


const ServiceDHS = [
    {
        id: 1,
        title: "MANTENIMIENTO Y RECARGA DE EXTINTORES",
        description: ['Batería de riesgo psicosocial', 'Seguridad industrial', 'Software de gestión', 'Capacitaciones', 'Asesorías'],
        imageService:'https://www.thesafetymaster.com/wp-content/uploads/2022/08/iprotection-dallas-fire-alarm-system-insepections.jpg',
    },
    {
        id: 2,
        title: "VENTA DE EQUIPOS CONTRA INCENDIO Y EMERGENCIA",
        description: ["Poliza de salud", "Medicina prepagada"],
        imageService:'https://cdn1.epicgames.com/ue/product/Screenshot/Assets03-1920x1080-b349d058ca4e4be9bb12a63a86c01e5f.jpg?resize=1&w=1920',
    },
    {
        id: 3,
        title: "REVISIÓN Y MANTENIMIENTO DE REDES DE INCENDIO",
        description: ['Seguros de Vida', 'Seguros para personas' ],
        imageService:'https://www.gihsonline.com/wp-content//themes/global/images/fire_industrialsafety.png',
    },
    {
        id: 4,
        title: "DIAGNÓSTICO DE RIESGOS INDUSTRIALES, COMERCIALES Y RESIDENCIALES",
        description: ['Todo riesgo construcción', 'Poliza de cumplimiento', 'Multiriesgos o PYME', 'Vehículos (Individual y colectivo)'],
        imageService:'https://vividfiresafety.com/wp-content/uploads/2021/04/improve-fire-safety-in-workplace.jpg',
    }
]

export const SeinServiceMapeo = () => {
  return (
    <Stack spacing={6} container direction={'row'} justifyContent={'center'} alignItems={'center'}
        sx={{
            width:'90%',
            // border:'1px solid red'
        }}
    >
        {ServiceDHS.map((servicio) => (
            <SeinServices
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

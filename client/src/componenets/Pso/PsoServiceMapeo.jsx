import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { PsoServices } from './PsoServices'


const ServicePso = [
    {
        id: 1,
        title: "EVALUACIÓN DE RIESGOS: ",
        description: ['Realizamos una evaluación exhaustiva de los riesgos en el lugar de trabajo. Identificar y analizar los posibles peligros y riesgos para la seguridad y la salud de los trabajadores.'],
        imageService:'https://elperuano.pe/fotografia/thumbnail/2022/08/16/000200729M.jpg',
    },
    {
        id: 2,
        title: "PROGRAMA DE CAPACITACIÓN",
        description: ["Implementamos programas de capacitación para los trabajadores, asegurándose de que estén debidamente informados sobre los procedimientos de seguridad, el uso adecuado del equipo de protección personal (EPP) y las medidas de prevención de accidentes."],
        imageService:'https://heightsafety.net/wp-content/uploads/training-refresher-1024x576.jpg',
    },
    {
        id: 3,
        title: "MANTENIMIENTO PREVENTIVO",
        description: ['Establecemos un programa de mantenimiento regular para maquinarias, equipos y herramientas, con el fin de prevenir fallas y asegurar su correcto funcionamiento.' ],
        imageService:'https://res.cloudinary.com/mcrey/image/upload/t_social/v1622157259/mcmc/solutions/predictive-maintenance_q6j7yo.jpg',
    },
    {
        id: 4,
        title: "INVESTIGACIÓN DE ACCIDENTES",
        description: ['Realizamos investigaciones exhaustivas de cualquier accidente o incidente de seguridad que ocurra en el lugar de trabajo. Analizar las causas raíz y tomar medidas correctivas para evitar que vuelvan a ocurrir en el futuro.'],
        imageService:'https://media.istockphoto.com/id/683757928/photo/incident-investigation-summary-report.jpg?s=612x612&w=0&k=20&c=038aWBvBo2XWT_z06PpR6-WSuJh4IYqyMmC8i2f8mhM=',
    }
]

export const PsoServiceMapeo = () => {
  return (
    <Stack spacing={6} container direction={'row'} justifyContent={'center'} alignItems={'center'}
        sx={{
            width:'90%'
            // border:'1px solid red'
        }}
    >
        {ServicePso.map((servicio) => (
            <PsoServices
                key={servicio.id}
                id={servicio.id}
                title={servicio.title}
                imgCard={servicio.imageService}
                description={servicio.description.map((ele)=> (
                    <Typography key={`${servicio.id}-${ele}`}>{ele}</Typography>
                ))}
            />
        ))}
    </Stack>
  )
}

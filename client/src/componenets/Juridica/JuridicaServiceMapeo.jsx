import React from 'react'
import { Stack, Typography } from '@mui/material'
import { JuridicaServices } from './JuridicaServices'


const ServiceDHS = [
    {
        id: 1,
        title: "ASESORAMIENTO LEGAL",
        description: ['Brindamos orientación y asesoramiento legal a empleados, sindicatos o empleadores sobre cuestiones laborales, derechos y obligaciones laborales, interpretación de leyes laborales y regulaciones, contratos laborales, políticas internas de la empresa, etc.'],
        imageService:'https://elperuano.pe/fotografia/thumbnail/2022/08/16/000200729M.jpg',
    },
    {
        id: 2,
        title: "NEGOCIACIONES COLECTIVAS",
        description: ["Representamos a empresas, sindicatos o empleados en la negociación de acuerdos colectivos con empleadores para establecer términos y condiciones de empleo, salarios, beneficios, horas de trabajo, etc."],
        imageService:'https://media.licdn.com/dms/image/D5612AQHM9k14PJJIuw/article-cover_image-shrink_600_2000/0/1673273429169?e=2147483647&v=beta&t=C_xwc4a6r4-lqdp-h_BG7lDGKCuoJK8BhMh1ORYVgUk',
    },
    {
        id: 3,
        title: "DESPIDOS Y TERMINACIÓN LABORAL",
        description: ['Asesoramos y representar a empleados que enfrentan despidos injustificados o ilegales, despidos discriminatorios, represalias laborales o terminaciones laborales conflictivas.' ],
        imageService:'https://www.incimages.com/uploaded_files/image/getty_655916570_357920.jpg',
    },
    {
        id: 4,
        title: "RECLAMACIONES DE SALARIOS Y BENEFICIOS",
        description: ['Ayudamos a los empleados a hacer valer sus derechos salariales y beneficios laborales, como salarios no pagados, horas extras no compensadas, vacaciones no utilizadas, beneficios de seguro o pensiones, entre otros.'],
        imageService:'https://imageio.forbes.com/specials-images/imageserve/6399daf4f04891ac68f47d97/0x0.jpg?format=jpg&width=1200',
    },
    {
        id: 5,
        title: "DISCRIMINACIÓN Y ACOSO LABORAL",
        description: ['Representamos a empleados que han experimentado discriminación ilegal en el lugar de trabajo debido a su raza, género, edad, religión, discapacidad u otra característica protegida. También abordar casos de acoso laboral.'],
        imageService:'https://employsure.com.au/wp-content/uploads/2020/06/200624-harassment.png',
    },
    {
        id: 6,
        title: "COMPENSACIÓN LABORAL Y ACCIDENTES DE TRABAJO",
        description: ['Ayudamos a los trabajadores a presentar reclamaciones de compensación laboral en caso de lesiones o enfermedades relacionadas con el trabajo, asegurando que reciban la atención médica adecuada y la compensación justa.'],
        imageService:'https://gashlaw.com/wp-content/uploads/Can-I-Receive-Compensation-if-My-New-York-Workplace-Injury-Was-Caused-by-My-Employer-1024x683.jpeg',
    },
    {
        id: 7,
        title: "LITIGIOS LABORALES",
        description: ['Representamos a empleados o empleadores en litigios laborales ante tribunales o agencias administrativas, incluyendo demandas por incumplimiento de contrato, discriminación laboral, represalias, etc.'],
        imageService:'https://lexnovum.com.vn/wp-content/uploads/2021/12/Tranh-chap-thuong-mai-va-lao-dong.jpg',
    },
    {
        id: 8,
        title: "ASESORAMIENTO EN PROCESOS Y COMUMENTOS",
        description: ['Asesoramos a los empleadores en la creación y actualizacion de documentacion relevante en el derecho laboral'],
        imageService:'https://ctb.ku.edu/sites/default/files/chapter_files/handstablechart.jpg',
    }
]

export const JuridicaServiceMapeo = () => {
  return (
    <Stack 

        sx={{
            width:'95%',
            padding:'0rem',
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'space-between',
            alignItems:'center',
            height:'65.625rem',

            // border:'1px solid red'
        }}
    >
        {ServiceDHS.map((servicio) => (
            <JuridicaServices
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

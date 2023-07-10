import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export const JuridicaServices = ({title, description, imgCard, id}) => {
    return (
        <Card sx={{ width: '21.1rem', height:'30rem', background:'white', borderRadius:'0.3125rem', marginBottom:'45px' }}>
            <CardMedia
              component="img"
              height="180.25rem"
              image={imgCard}
              alt={id}
              sx={{
                marginBottom:'0.7rem'
                // border:'1px solid red'
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div"
                sx={{
                    height:'5rem'
                }}
              >
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
        </Card>
    );
}

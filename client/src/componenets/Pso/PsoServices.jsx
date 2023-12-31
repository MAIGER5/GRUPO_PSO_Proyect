import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export const PsoServices = ({title, description, imgCard, id}) => {
    return (
        // <Card key={id} sx={{ width: '21.5625rem', height:'31rem', background:'white', borderRadius:'0.3125rem' }}>
        <Card key={id} sx={{ width: '21.5625rem', height:'31rem', borderRadius:'0.3125rem' }}>
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
              <Typography key={`${id}-title`} gutterBottom variant="h6" component="div"
                sx={{
                    height:'5rem'
                }}
              >
                {title}
              </Typography>
              <Typography key={`${id}-description`} variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
        </Card>
    );
}

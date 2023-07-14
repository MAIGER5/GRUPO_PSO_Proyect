import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export const SeinServices = ({title, description, imgCard, id}) => {
    return (
        // <Card sx={{ width: '21.5625rem', height:'28rem', background:'white', borderRadius:'0.3125rem' }}>
        <Card sx={{ width: '21.5625rem', height:'28rem', borderRadius:'0.3125rem' }}>
            <CardMedia
              component="img"
              height="180.25rem"
              image={imgCard}
              alt={id}
              sx={{
                marginBottom:'0.2rem'
                // border:'1px solid red'
              }}
            />
            <CardContent>
              <Typography gutterBottom fontSize={'17px'} component="div"
                sx={{
                    height:'5rem',
                    marginBottom:'0.625rem'
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

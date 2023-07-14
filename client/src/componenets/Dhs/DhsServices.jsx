import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export const DhsServices = ({title, description, imgCard, id}) => {
    return (
        // <Card sx={{ width: '21.1rem', height:'28rem', background:'white', borderRadius:'0.3125rem' }}>
        <Card sx={{ width: '21.1rem', height:'28rem', borderRadius:'0.3125rem' }}>
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
              {/* <Typography variant="body2" color="text.secondary"> */}
                {description.map((item, index) => ( <Typography key={index} component="span" variant="body2" color="text.secondary">{item}</Typography> ))}
              {/* </Typography> */}
            </CardContent>
        </Card>
    );
}

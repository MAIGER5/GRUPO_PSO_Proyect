import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import foto from '../../utils/CAR1.jpg'
import { Grid, Typography } from '@mui/material';

export const PsoCard = () => {
    return (
        <Card >
          <CardMedia sx={{
            width: '100%',
            height: '62.5rem',
            position: 'absolute',
            opacity:0.5
            }}
              component='img'
              image='https://safesitehq.com/wp-content/uploads/2020/04/guide-safety-management-systems.jpeg'     
          />
        </Card>
      ) 
}

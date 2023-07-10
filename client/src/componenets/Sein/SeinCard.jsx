import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import foto from '../../utils/CAR1.jpg'
import { Grid, Typography } from '@mui/material';

export const SeinCard = () => {
    return (
        <Card >
          <CardMedia sx={{
            width: '100%',
            height: '62.5rem',
            position: 'absolute',
            opacity:0.5
            }}
              component='img'
              image='https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-11/Industrial-Safety-Engineering-Technician-Technical-Diploma.jpg?itok=xgkwv6rK'     
          />
        </Card>
      ) 
}

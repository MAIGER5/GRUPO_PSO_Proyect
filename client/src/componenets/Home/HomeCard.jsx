import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import foto from '../../utils/PORTADA.png'
import { Box, Grid } from '@mui/material';

export const HomeCard = () => {
  return (
    <Card>
        <CardMedia sx={{
            width: '100%',
            height: '28.75em',
          }}
            component='img'
            image={foto}
            
    />
    </Card>
  ) 
}

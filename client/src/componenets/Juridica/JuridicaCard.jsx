import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Typography } from '@mui/material';

export const JuridicaCard = () => {
    return (
        <Card >
          <CardMedia sx={{
            width: '100%',
            height: 1000,
            position: 'absolute',
            opacity:0.5
            }}
              component='img'
              image='https://dailygenius.com/wp-content/uploads/2019/12/Contract-Law-Strategies-that-Help-Protect-your-Interest.jpg'     
          />
        </Card>
      ) 
}

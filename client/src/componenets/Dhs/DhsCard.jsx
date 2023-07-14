import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import foto from '../../utils/CAR1.jpg'
import { Box, Grid, Typography } from '@mui/material';

export const DhsCard = () => {
    return (
        <Card >
          <Box sx={{ backgroundColor: 'white'}}>
              <CardMedia sx={{
                width: '100%',
                height: 1000,
                position: 'absolute',
                opacity:0.5,
                // backgroundColor: 'white'
                }}
                  component='img'
                  image={foto}
          /> </Box>

        </Card>
      )
}

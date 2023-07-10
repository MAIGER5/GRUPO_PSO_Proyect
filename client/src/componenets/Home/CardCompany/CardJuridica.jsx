import { Avatar, Box, Button, Card, CardContent, Typography, createTheme } from "@mui/material"
import compania from '../../../utils/LogoJuridica.png'
import { Link} from "react-router-dom"
import styled from "@emotion/styled";
import { deepPurple } from '@mui/material/colors';

const customTheme = createTheme({
    palette: {
      primary: {
        main: deepPurple[500],
      },
    },
  });
  
  const StyledCard = styled(Card)`
    ${({ theme }) => `
    cursor: pointer;
    transition: ${theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      transform: scale(1.04);
    }
    `}
  `;

export const CardJuridica = () => {
  return (
    <Link to={'/juridica'}>
          <StyledCard sx={{
              position:'relative',
              width:'15rem',
              height: '23.75rem',
              bgcolor: '#113f67',
              // background: 'linear-gradient(4deg, #ffff 0%, #fdc57b 130%)',
              borderRadius: 1,
              boxShadow: '0.3125rem 0.3125rem 1.875rem 0.4375rem rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)',
              border:'1px solid #007cb9'
              }}
              theme={customTheme}
              
          >
              {/* <CardMedia  sx={{
                maxWidth:100,
                maxHeight:100,
                borderRadius:'50%'
                }}
                  component='img'
                  alt="tarjetasCompany"
                  image={compania}
              /> */}
              <CardContent>
                  <Avatar alt="Remy Sharp" src={compania}
                    sx={{width:'5.625rem', height:'5.625rem', backgroundColor:'#ffff', marginLeft:'3.4375rem', marginTop:'1.875rem'}}
                    imgProps={{ style: { width: "4.375rem", height: "1.875rem" } }}
                  />
                  <Typography  variant="body2" align="center"  fontWeight={'bold'} color="#ffff" marginTop={4}> JURÍDICA </Typography>
                  <Typography align="center" fontSize={'0.75rem'} color="#ffff" marginTop={'30px'}> Asesoría y respaldo a nuestros clientes, en Intermediacón en riesgos Laborales y Seguros generales.</Typography>
              </CardContent>
              <Box sx={{
                fontWeight:'bold', 
                display:'flex', 
                width:'100%', 
                justifyContent:'center', 
                marginTop:'0.9375rem', 
                
                }}
              >
                <Button sx={{border: '1px solid white', borderRadius:'6.25rem', width:'6.25rem'}} > <Typography color={'#ffff'} fontSize={12}>VER MAS</Typography>  </Button>
              </Box>
          </StyledCard>
      </Link>
  )
}

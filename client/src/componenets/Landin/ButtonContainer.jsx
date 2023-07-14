import React from 'react';
import { Button, Typography } from '@mui/material';
import '@fontsource-variable/raleway';

const ButtonContainer = () => {
  return (
    <Button

      sx={{
        position: 'absolute',
        background: '#ffc93c',
        borderRadius: '20px',
        marginTop: '10em',
        width: '16.875em',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Typography
        fontSize='1.25em'
        color={'#ffffff'}
        fontFamily={[
          'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;',
        ]}
      >
        Continuar
      </Typography>
    </Button>
  );
};

export default ButtonContainer;
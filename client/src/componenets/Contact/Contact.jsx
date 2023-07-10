import { Button, Grid, Input, ListItemButton, ListItemIcon, ListItemText, MenuItem, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React from 'react'

export const Contact = () => {
  return (
    <Grid 
        container 
        width={'100vw'} 
        justifyContent={'center'} 
        // border={'1px solid blue'}
    >
        <Grid
            container
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            // border={'1px solid red'}
            sx={{
                width:'65rem',
                height:'43.75rem'
            }}

        >
            <Grid item xs={6} container direction={'column'} justifyContent={'start'} alignItems={'start'}
                sx={{
                    // border:'1px solid green', 
                    height:'14.5rem'}}
            >
                <Typography fontSize={'2.275rem'} marginBottom={'30px'} >
                    Contactanos
                </Typography>
                <ListItemButton>
                    <ListItemIcon>
                    <SendIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Teléfono 3017079804" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    <SendIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Email Grupopso@grupopso.com.co" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    <SendIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Dirección Kra 45a #38 96 Medellín Antioquia" />
                </ListItemButton>
    
            </Grid>
            <Grid 
                item xs={6} 
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                marginBottom={'1.25rem'}
                sx={{
                    // border:'1px solid green',
                    height:'21.875rem'
                }}

            >

                <img src="" alt="" />
                <TextField id="filled-basic" label="Nombre completo" variant="filled" 
                    sx={{marginBottom:'0.625rem', background:'#ffff', borderRadius:'0.25rem', width:'18.75rem'}} />
                <TextField id="filled-basic" label="Email" variant="filled" 
                    sx={{marginBottom:'0.625rem', background:'#ffff', borderRadius:'0.25rem', width:'18.75rem'}}/>
                <TextField
                id="filled-multiline-static"
                label="Mensaje"
                multiline
                rows={4}

                variant="filled"
                sx={{marginBottom:'0.625rem', background:'#ffff', borderRadius:'0.25rem', width:'18.75rem'}}
                />
                <Button sx={{background:'#005792', width:'7.5rem', color:'#ffff'}} >Enviar</Button>
            </Grid>
        </Grid>
    </Grid>
  )
}

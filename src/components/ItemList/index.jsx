import React  from "react";
import {Box, Paper, Grid} from '@mui/material';
import {DateRange, Report, Check} from '@material-ui/icons';

// function randomColor(){
//     const colors = ['#eb4034', '#E0AD58', '#58E088', '#62B9FC'];
//     return colors[Math.floor(Math.random() * (colors.length-1) + 1)];
// }

export function ItemList({vaccine, onClick}){
    let color = '#3ed63b';
    let textStatus = vaccine.status;
    if (vaccine.status !== "administered"){
        if ( (vaccine.date) < Date.now()){
            color = '#eb4034'
        }else{
            color = '#62B9FC';
            textStatus = "in time"
        }
    }
    return(
        <Box
            paddingLeft={0.5}
            borderRadius={1.5}
            marginTop={1}
            style={{backgroundColor : color}}
            onClick={() => onClick(vaccine.id)}
            
        >
            <Paper style={{padding:12, cursor:'pointer'}}  >
                <h3 style={{marginTop:2, textTransform: "uppercase" }}>{vaccine.name}</h3>
                <Grid container justifyContent="space-between">
                    <Grid item >
                        <div style={{display:'flex', flexDirection:"row", alignItems:'center'}}>
                            <DateRange fontSize="small" />
                            {vaccine.date.toLocaleDateString('pt-BR')}
                        </div>

                    </Grid>
                    
                    <Grid item   >
                        <div style={{display:'flex', flexDirection:"row", alignItems:'center', color: color}}>
                            
                            {vaccine.status === "administered" ? <Check fontSize="small" /> : <Report fontSize="small" />}
                            {textStatus}

                        </div>
                    </Grid>
                    
                </Grid>
            </Paper>

        </Box>
    );
}
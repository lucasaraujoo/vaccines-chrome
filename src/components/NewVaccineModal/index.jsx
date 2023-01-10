import React, { useState } from "react";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle, 
    TextField 
} from "@mui/material";

import brLocale from 'date-fns/locale/pt-BR';



export function NewVaccineModal({show, onClose, onAdd}){
    const [vaccineName, setVaccineName] = useState('');
    const [vaccineDate, setVaccineDate] = useState(new Date());

    function addNewVacine(){
        onAdd({
            name: vaccineName, 
            date: vaccineDate
        });
        setVaccineName('');
        onClose();
    }

    return(
        <Dialog open={show} onClose={onclose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" >
                Adicionar nova vacina
            </DialogTitle>
            <DialogContent>
                <DialogContentText>Insira o nome da vacina e a data de aplicação</DialogContentText>

                <TextField 
                    id="vaccineName"
                    autoFocus
                    label="Nome da vacina/dose"
                    type="text"
                    fullWidth
                    sx={{m:1}}
                    value={vaccineName}
                    onChange={(e) => setVaccineName(e.target.value)}

                />

                <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
                    <DatePicker
                        label="Data da aplicação"
                        value={vaccineDate}
                        onChange={(newValue) => {
                            setVaccineDate(newValue);
                        }}
                       
                        renderInput={(params) => <TextField {...params} fullWidth sx={{m:1}} />}

                    >
                    </DatePicker>
                </LocalizationProvider>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancelar</Button>
                <Button onClick={addNewVacine} color="primary">Adicionar</Button>
            </DialogActions>
        </Dialog>
    )
}
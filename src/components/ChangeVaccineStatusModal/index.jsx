
import React from "react";

import { 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle 
} from "@mui/material";

export function ChangeVaccineStatusModal({show, onClose, onSave, vaccineToEdit}){

    function finishVaccine() {
        onSave(vaccineToEdit.id);
        onClose();
    }

    return (
        <Dialog open={show} onClose={onClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Alterar status da vacina</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Deseja marcar a vacina <b>{vaccineToEdit.name}</b> como {vaccineToEdit.status === "administered" ? "NÃO" : ""} aplicada?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="secondary">
              Não
            </Button>
            <Button onClick={finishVaccine} color="primary">
              Sim
            </Button>
          </DialogActions>
        </Dialog>
      );
}
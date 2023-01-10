import React, { useState } from "react";

import { Fab } from "@mui/material";
import { Add } from "@material-ui/icons";
import {v4 as uuidv4} from "uuid";

import { List } from "../../components/List";
import { NewVaccineModal } from "../../components/NewVaccineModal";
import { ChangeVaccineStatusModal } from "../../components/ChangeVaccineStatusModal";


export function Home(){
    const [vaccines, setVaccines] = useState([]);
    const [vaccineToEdit, setvaccineToEdit] = useState({});
    const [showNewVaccineModal , setShowNewVaccineModal] = useState(false);
    const [showChangeVaccineStatusModal, setShowChangeVaccineStatusModal] = useState(false);



    function handleNewVaccine(vaccine){
        
        const data = {
            id: uuidv4(),
            name: vaccine.name,
            date: vaccine.date,
            status: "unadministered"
        }
        setVaccines([...vaccines, data]);
    }

    function handleItemClick(id){
        const vaccineToEdit = vaccines.find((vaccine) => vaccine.id === id);

        setvaccineToEdit(vaccineToEdit);
        setShowChangeVaccineStatusModal(!!vaccineToEdit);
        
    }

    function handleUpdateVaccine(id){
        const data = vaccines.map((vaccine) => {
            let newStatus = vaccine.status;
            if (id === vaccine.id){
                newStatus = vaccine.status === "administered" ? "unadministered" : "administered";
            }
            return {
                ...vaccine,
                status: newStatus
            }
        });
        setVaccines(data);
    }


    return( 
        <div className="container">
            <List vaccines={vaccines} onClick={handleItemClick}/>

            <Fab
                color="primary"
                style={{position: "absolute", bottom: "30px", right: "10px"}}
                onClick={() => setShowNewVaccineModal(true)}
            >
                <Add />                    
            </Fab>

            {vaccines.length === 0 && (
                <div className="no-vaccines">
                <span>Sem vacinas, cadastre uma agora mesmo!</span>
                </div>
            )}

            <NewVaccineModal 
                show={showNewVaccineModal}
                onClose={() => setShowNewVaccineModal(false)}
                onAdd={handleNewVaccine}
            />

            <ChangeVaccineStatusModal 
                show={showChangeVaccineStatusModal}
                onClose={() => setShowChangeVaccineStatusModal(false)}
                onSave={handleUpdateVaccine}
                vaccineToEdit={vaccineToEdit}
            />
        </div>
    );
}
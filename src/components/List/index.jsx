import React from "react";

import { Box } from "@mui/material";

import { ItemList } from "../ItemList";

export function List({vaccines, onClick}){

    

    return(
        <Box padding={1}>
            
            {vaccines && vaccines
            .map((vaccine) => 
            <ItemList vaccine={vaccine} onClick={onClick} key={vaccine.id}/>
            )}
        </Box>
    );
}
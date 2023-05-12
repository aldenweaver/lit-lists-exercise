import React, { useState } from 'react';

import { Box, Card, CardContent, List, ListItemButton, ListItemText, Typography } from "@mui/material";

import { scrollBoxStyle} from '../styles/displayStyles';

function HouseList({ allHouses, setCurrentHouse }) {
    const[selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        setCurrentHouse(allHouses[index]);
    };

    return ( 
        <>
            <Typography variant="h6">
                <b>House List</b>
            </Typography>
            <br/>

            <Card> 
                <CardContent>
                    <Box sx={scrollBoxStyle}>
                        <List component="nav" aria-label="main mailbox folder" >
                            {allHouses.map((house, index) => { return (
                                <ListItemButton 
                                    key={index}
                                    selected={selectedIndex === index} 
                                    onClick={(event) => handleListItemClick(event, index)}
                                >
                                <ListItemText primary={house.FacilityName}/>
                            </ListItemButton>
                            );})}
                        </List>
                    </Box>
                </CardContent>
            </Card>
        </>
     );
}

export default HouseList;
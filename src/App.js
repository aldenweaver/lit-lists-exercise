/* eslint-disable no-lone-blocks */

import React, { useState } from 'react';

import { Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import House from './components/House';
import HouseList from './components/HouseList';

// Import static data from file
import data from './data/facilitiesData';

function App() {
  {/* Manage state in App */}
  const [facilitiesData, setFacilitiesData] = useState(data);

  // Null allows for conditional rendering
  const [currentHouse, setCurrentHouse] = useState(null);

  return (
    <Container className="App">
      <Typography variant="h4">
        Lit Lists - List Exercises
      </Typography>
      <br/>

      <Card>
        <CardHeader title="Fire Fighting Facilties (Static Data)"/>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <House current={currentHouse}/>
            </Grid>
            <Grid item xs={6}>
              <HouseList allHouses={facilitiesData} setCurrentHouse={setCurrentHouse}/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br/>

    </Container>
  );
}

export default App;

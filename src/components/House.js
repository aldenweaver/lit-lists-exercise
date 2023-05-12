import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material";

function House({ current }) {
    return ( 
        <>
        <Typography variant="h6">
            <b>Current House</b>
        </Typography>
        <br/>

        { current ?
            <Card>
                <CardHeader title={current.FacilityName}/>
                <CardContent>
                    Facility Address: {current.FacilityAddress} <br/>
                    Borough: {current.Borough} <br/>
                </CardContent>
            </Card>
        :
            <Card>
                <CardContent> 
                    <i>Please Select a House</i>
                </CardContent>
            </Card>
        }
        </>
     );
}

export default House;
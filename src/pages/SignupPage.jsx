import {Container, Grid } from '@mui/material';
import SignupBox from '../components/SignupBox';
export default function SignupPage(){
    return(
        <Container>
            <Grid sx={{display:"flex",flexDirection:"column",marginY:5,alignItems:"center"}}>
                <SignupBox />
            </Grid>
        </Container>
    );
}
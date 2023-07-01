import {Container, Grid } from '@mui/material';
import LoginBox from '../components/LoginBox'
export default function LoginPage(){
    return(
        <Container>
            <Grid sx={{display:"flex",flexDirection:"column",marginY:5,alignItems:"center"}}>
                <LoginBox />
            </Grid>
        </Container>
    );
}
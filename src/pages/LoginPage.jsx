import {Container, Grid } from '@mui/material';
import LoginBox from '../components/LoginBox'
export default function LoginPage(){
    return(
        <Container>
            <Grid sx={{display:"flex",marginY:5,justifyContent:"center"}}>
                <LoginBox />
            </Grid>
        </Container>
    );
}
import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Navbar from './Components/Navbar';
import Content from './Components/Content';

export default function App(){
    return (
       <Grid container direction = 'column'>
            <Grid item>
                <Navbar />
            </Grid>
            <Grid item container>
                <Grid item xs = {0} sm = {4}>
                    show interfaces
                </Grid>
                <Grid item xs = {12} sm = {8} > {/* (#/12) represent the percentage on the screen when it is extra small(xs) or small(sm)*/}
                    <Content value = {20}/>
                    content due to interfaces
                </Grid>
            </Grid>
       </Grid>
    );
}
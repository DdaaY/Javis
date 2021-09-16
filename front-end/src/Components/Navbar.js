import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {RiAncientGateFill} from 'react-icons/ri';

const useStyles = makeStyles(()=> ({
    typographyStyles : {
        flex : 1,
    },
    AppIcon : {
        /*flex : 1,*/
    },
}));

export default function Navbar() {

    const classes = useStyles();

    return (
        <AppBar position = "static">
            <Toolbar>
                <Typography className = {classes.typographyStyles}>
                    Javis  
                </Typography>
                <RiAncientGateFill className = {classes.AppIcon}/>
            </Toolbar>
        </AppBar>
    );
}
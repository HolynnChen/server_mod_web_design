import React from 'react';
import ReactDOM from 'react-dom'
import Login from './components/login/login'
import Grid from '@material-ui/core/Grid';
import Header from './components/admin/header'

const login = (
    <Grid container justify='center'>
        <Grid item xs={2}>
        <Login> </Login>
        </Grid>
    </Grid>
)

const admin = (
    <Header />
);

ReactDOM.render(
    admin,
    document.body
);
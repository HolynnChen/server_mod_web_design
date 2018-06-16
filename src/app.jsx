import React from 'react';
import ReactDOM from 'react-dom'
import Login from './components/login/login'
import './assets/style/reset.scss'
import Grid from '@material-ui/core/Grid';

const element = (
    <Grid container justify='center'>
        <Grid item xs={2}>
        <Login> </Login>
        </Grid>
    </Grid>
)

ReactDOM.render(
    element,
    document.body
);
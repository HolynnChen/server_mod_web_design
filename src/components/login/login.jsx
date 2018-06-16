import React from 'react';
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Login extends React.Component {
    constructor(props) {
        super()
        this.props = props
    }
    render() {
        return (
            <Grid container spacing={20}>
                <Grid item xs={12}>
                    <LinearProgress variant="buffer" value={30} valueBuffer={33} />
                </Grid>
                <Grid item xs={12}>
                    <Grid container
                        alignItems='center'
                        justify='center'>
                        <TextField id='account' type='text' label='account' margin='dense' fullWidth />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container
                        alignItems='center'
                        justify='center'>
                        <TextField id='account' type='password' label='password' margin='dense' fullWidth />
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container
                        alignItems='center'
                        justify='space-around'>
                        <Button variant="contained" color="primary" className={this.props.button}>Login</Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles()(Login)
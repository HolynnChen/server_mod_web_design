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
import Password from './password'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            account:''
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    login = () => {
        this.pwd = document.getElementById('login-password').value;
    }


    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={32} justify='center'>
                <Grid item xs={12}>
                    <LinearProgress color="secondary" hidden />
                </Grid>
                <TextField
                    id='account'
                    type='text'
                    label='account'
                    margin='dense'
                    onChange={this.handleChange('account')}
                    fullWidth />
                <Password fullWidth onChange={this.handleChange('password')} value={this.state.password}/>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    style={{ margin: 15 }}
                    onClick={this.login}>Login</Button>
            </Grid>
        )
    }
}

export default withStyles()(Login)
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import Password from './password'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            account: '',
            password: '',
            accountError: false,
            passwordError: false,
            showProgress: true,
            button: false,
            accFocus: true,
            pwdFocus: false,
        }
    }

    
    /**
     * @param {RegExp} pwdPattern
     * @param {RegExp} accPattern
     * @returns {Boolean}
     * @memberof Login
     */
    check = (pwdPattern = /\w+/,accPattern = pwdPattern) => {
        let state = {
            accountError: false,
            passwordError: false,
        }
        if(!accPattern.test(this.state.account)) {
            state.accountError = true
            state.account = ''
            state.accFocus = true
        }
        if(!pwdPattern.test(this.state.password)) {
            state.passwordError = true
            state.password = ''
            state.pwdFocus = true
        }
        
        if(state.accountError || state.passwordError) { 
            this.setState(state)
            return false
        } 
        return true
    }


    /**
     * @param {String} prop
     * @return {Function}
     *
     * @memberof Login
     */
    handleChange = prop => event => {
        let state ={ [prop]: event.target.value }

        if(this.state.passwordError && prop === 'password') {
            state.passwordError = false
        }
        if(this.state.accountError && prop === 'account') {
            state.accountError = false
        }
        this.setState(state)
    }

    login = () => {
        if(this.check()){
            console.log('login')
            this.setState({
                showProgress: false,
                button: true
            })
        } else {
            console.log('error')
        }
        
    }

    handleKeydown = (event) => {
        if (event.key === 'Enter') {
            this.login()
        }
    }


    render() {
        const { classes } = this.props
        return (
            <Grid container spacing={0} justify='center'>
                <Grid item xs={12}>
                    <LinearProgress color="secondary" hidden={this.state.showProgress} />
                </Grid>
                <TextField
                    autoFocus={this.state.accFocus}
                    error={this.state.accountError}
                    id='account'
                    type='text'
                    label='account'
                    margin='dense'
                    onChange={this.handleChange('account')}
                    onKeyPress={this.handleKeydown}
                    fullWidth />
                <Password
                    autoFocus={this.state.pwdFocus}
                    error={this.state.passwordError}
                    fullWidth
                    onChange={this.handleChange('password')}
                    onKeyPress={this.handleKeydown}
                    value={this.state.password} />
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    style={{ margin: 15 }}
                    disabled={this.state.button}
                    onClick={this.login}>Login</Button>
            </Grid>
        )
    }
}

export default withStyles()(Login)
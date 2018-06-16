import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class Password extends React.Component {
    constructor(props) {
        super(props);
        //initial state
        this.state = {
            showPassword: false,
        };
    }

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    render() {
        const { showPassword } = this.state;
        const { fullWidth, value, onChange, onKeyPress, error } = this.props;
        return (
            <FormControl fullWidth={fullWidth}>
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                    error={error}
                    id="login-password"
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        );
    }
}

export default withStyles()(Password)
export {
    Password
}
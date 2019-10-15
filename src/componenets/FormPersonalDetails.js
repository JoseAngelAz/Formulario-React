import React, { Component } from 'react'
import MuiThemeProvider from
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Styleboton from '../stylesJS/Styleboton';


export class FormPersonalDetails extends Component {
   
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    //regresar al paso anterior
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Introducir Datos Personales"/>
                    <TextField
                     hintText="Introduce tu Ocupasión"
                     floatingLabelText="Ocupasión"
                     onChange={handleChange('occupation')}
                     defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField
                     hintText="Introduce tu Ciudad"
                     floatingLabelText="Ciudad"
                     onChange={handleChange('city')}
                     defaultValue={values.city}
                    />
                    <br/>
                    <TextField
                     hintText="Introduce Bio"
                     floatingLabelText="Bio"
                     onChange={handleChange('bio')}
                     defaultValue={values.bio}
                    />
                    <br/>
                    <RaisedButton
                     label="Continuar"
                     primary={true}
                     style={StyleSheet.Styleboton}
                     onClick={this.continue}
                    />
                    <br/>
                    <RaisedButton
                     label="Regresar"
                     primary={false}
                     style={StyleSheet.Styleboton}
                     onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const booton ={
    buttom:{
        margin:15
    }
}

export default FormPersonalDetails;

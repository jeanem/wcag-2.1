import React, { Component } from 'react';
import axios from 'axios';

//https://blog.stvmlbrn.com/2017/04/07/submitting-form-data-with-react.html

class InputPurpose extends Component {
    constructor() {
        super();
        this.state = {
          fullname: '',
          fname: '',
          lname: '',
          aname: '',
        };
      }

      onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { fullname, fname, lname, aname } = this.state;

        axios.post('/', { fullname, fname, lname, aname })
          .then((result) => {
            //access the results here....
          });
      }
    render() {
        return (
            <div>
                <p>"The purpose of each input field collecting information about the user can be programmatically determined when:</p>

                <ul>
                    <li>The input field serves a purpose identified in the Input Purposes for <a href="https://www.w3.org/TR/WCAG21/#input-purposes">User Interface Components section</a>; and</li>
                    <li>The content is implemented using technologies with support for identifying the expected meaning for form input data."</li>
                </ul>
                <h3>A sample form</h3>
                <form method="post" action="" onSubmit={ this.onSubmit.bind(this) }>
                    <fieldset>
                        <legend>Autocomplete = name</legend>

                        <label for="wid-FullName1">Full name </label> 
                        <input id="wid-FullName1" type="text" name="fullname" autoComplete="name" onChange={this.onChange} />
                    </fieldset>
                    <fieldset>
                        <legend>Autocomplete is <strong>off</strong></legend>
                        <label for="wid-FullName_AutoOff">Enter full name again </label> 
                        <input id="wid-FullName_AutoOff"  type="text" name="fullname" autoComplete="off" onChange={this.onChange} />
                    </fieldset>
                    <fieldset>
                        <legend>Another field with autocomplete = name </legend>
                        <label for="wid-FullName2">Enter full name a third time</label> 
                        <input id="wid-FullName2" type="text" name="fullname" autoComplete="name" onChange={this.onChange} />
                    </fieldset>
                    <fieldset>
                        <legend>Autocomplete = family-name</legend>  
                        <label for="wid-FamilyName">Family name (or last name)</label> 
                        <input id="wid-FamilyName" type="text" name="lname" autoComplete="family-name" onChange={this.onChange}/>
                    </fieldset>
                    <input type="submit" className="w-BtnBase" value="Submit" />
                </form>
            </div> 
        );
    }
}

export default InputPurpose;


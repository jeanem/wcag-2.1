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
        const { shortWCAGLink } = this.props;
        return (
            <div>
                <blockquote cite= { shortWCAGLink }>The purpose of each input field collecting information about the user can be programmatically determined when:</blockquote>

                <ul>
                    <li>The input field has a purpose listed in the <a href="https://www.w3.org/TR/WCAG21/#input-purposes">User Interface Components section</a>; and</li>
                    <li>And the technologies implementing the content support an identifying method. HTML5 does this with the autocomplete attribute.</li>
                </ul>
                <h3>A sample form</h3>
                <form method="post" action="" onSubmit={ this.onSubmit.bind(this) }>
                    <fieldset>
                        <legend>Autocomplete = name</legend>

                        <label htmlFor="wid-FullName1">Full name </label> 
                        <input id="wid-FullName1" type="text" name="fullname" autoComplete="name" onChange={this.onChange} />
                    </fieldset>
                    <fieldset>
                        <legend>Autocomplete is <strong>off</strong></legend>
                        <label htmlFor="wid-FullName_AutoOff">Enter full name again </label> 
                        <input id="wid-FullName_AutoOff"  type="text" name="fullname" autoComplete="off" onChange={this.onChange} />
                    </fieldset>
                    <fieldset>
                        <legend>Another field with autocomplete = name </legend>
                        <label htmlFor="wid-FullName2">Enter full name a third time</label> 
                        <input id="wid-FullName2" type="text" name="fullname" autoComplete="name" onChange={this.onChange} />
                    </fieldset>
                    <fieldset>
                        <legend>Autocomplete = family-name</legend>  
                        <label htmlFor="wid-FamilyName">Family name (or last name)</label> 
                        <input id="wid-FamilyName" type="text" name="lname" autoComplete="family-name" onChange={this.onChange}/>
                    </fieldset>
                    <input type="submit" className="w-BtnBase" value="Submit" />
                </form>
            </div> 
        );
    }
}

export default InputPurpose;


import React from "react";
import { Saveform } from "../actions"
import { connect } from "react-redux"


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            gender: '',
            dept: '',
            errmessage: "enter values"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    };

handleClear()
{
    console.log("hi")
}
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit(e) {

        


    }

    render() {
        return (
            <div>
                <form >

                    FIRST NAME:<input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} ></input><br /><br />
                    LAST NAME:<input type="text" name="lname" value={this.state.lname} onChange={this.handleChange}></input><br /><br />
                    EMAIL:&emsp;&emsp; <input type="text" name="email" value={this.state.email} onChange={this.handleChange} ></input><br /><br />
                    PHONE:&emsp;&emsp;<input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} ></input><br /><br />
                    GENDER: &emsp;<input type="radio" name="gender" value="male" />Male
                         <input type="radio" value="male" />Female
                         <input type="radio" value="male" />other<br />
                    <br />

                    DEPARTMENT:&emsp;<select id="dropdown" name="dept" value={this.state.dept} onChange={this.handleChange}>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="IT">IT</option>
                        <option value="ME">ME</option>
                        <option value="ELE">ELE</option>
                    </select><br /><br /><br />
                    <button onClick={ this.handleSubmit}>SAVE</button>&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button onClick={this.handleClear }>CANCEL</button><br />
                    <br />
                    <br />







                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {formsaved:state.formsaved };
    

}
export default connect(mapStateToProps, { Saveform })(Form);


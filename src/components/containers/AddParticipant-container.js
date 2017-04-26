import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/addParticipantForm.css';
class AddParticipantContainer extends Component {
  constructor(props){
    super(props);
 
    //initsialState
    this.state = {
      name: '',
      email: '',
      phoneNumber: ''
    };

       this.handleEmailChange = this.handleEmailChange.bind(this);
       this.handleNameChange = this.handleNameChange.bind(this);
       this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
 }
  //Sets value of input = state
 handleEmailChange (e){

    this.setState({ email: e.target.value });
  
  }
  
  handleNameChange (e) {
 
    this.setState({ name: e.target.value });

  }
    handlePhoneNumberChange (e){
    this.setState({ phoneNumber: e.target.value });
  }

  
 handleSubmit (e){
  //Tests that fields are not empty
   if (this.state.name === ""||
      this.state.email === ""||
      this.state.phoneNumber === "") {
      this.setState({ error: "All the fields are required!"});
    }else{
      //Adds id,name,email,phoneNumber to newParticipant State
      this.setState({newParticipant:{
      id: this.props.participantListSize.length+1,
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber
      //Passes newParticipant to addParticipant function
    }}, function(){
        this.props.addParticipant(this.state.newParticipant);
        // console.log(this.state);
        });
 // alert("added participantsucsessfull"+this.state.email+this.state.name+this.state.phoneNumber);
  //Resets state
    this.setState({ phoneNumber: '', email:'',name:'' });
  }
 e.preventDefault();
   
 
  }

  render() {

    return(

    <div className="wrapper">
     <h3 id="TitleText" >List Of Participants</h3>
     <div className="formWrapper" >
		 
        <div > {this.state.error}</div>
          <form className="form-inline" id="addParticipantForm" onSubmit={this.handleSubmit}>

            <div>
              <label className="sr-only" ></label>
              <input
                className="form-control mb-2 mr-sm-2 mb-sm-0"
                placeholder="Full name"
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}  />
            </div>
            <div>
               <label className="sr-only" ></label>
              <input
             
                className="form-control mb-2 mr-sm-2 mb-sm-0"
                placeholder="E-mail adress"
                type="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div>
               <label className="sr-only" ></label>
              <input  
             
                className="form-control mb-2 mr-sm-2 mb-sm-0"
                placeholder="Phone number"
                type="text"
                value={this.state.phoneNumber}
                onChange={this.handlePhoneNumberChange.bind(this)}  />
            </div>
          <button type="submit" value="submit" >Add new</button>
        </form>

      </div>
    </div>
     
    );
  }
}

AddParticipantContainer.propTypes = {
  addParticipant: PropTypes.func,
  handleSubmit:PropTypes.func,
  handleNameChange:PropTypes.func,
  handleEmailChange:PropTypes.func,
  handlePhoneNumberChange:PropTypes.func,
};

export default AddParticipantContainer;

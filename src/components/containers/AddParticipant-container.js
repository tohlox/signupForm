import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
class AddParticipantContainer extends Component {
  constructor(){
    super();


    this.state = {
      newParticipant: {},
      name: '',
      email: '',
      phoneNumber: '',
     // paticipant_list_size: this.props.participantListSize.length
      everFocusedEmail: false,
      everFocusedName: false,
      everFocusedPhoneNumber: false,
      inFocus: '',

            touched: {
        email: false,
        name: false,
        phoneNumber:false,
      },
      errors: {
  name: '',
  email:'',
  phoneNumber:'',
},
   };
  }




  validate(email, name, phoneNumber){
  return {
    email: email.length === 0,
    name: name.length === 0,
    phoneNubmer: phoneNumber.length === 0
  }
}

 handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }
  
  handleNameChange = (e) => {
    let nameValue = e.target.value;
    if(/^[a-z ]+$/i.test(nameValue)){
    this.setState({ name: e.target.value });
  }
  }
    handlePhoneNumberChange = (e) => {
    this.setState({ phoneNumber: e.target.value });
  }

   
 handleSubmit = (e) =>{
   if (!this.canBeSubmitted()) {
      e.preventDefault();
      return;
    }
 this.setState({newParticipant:{
      id: this.props.participantListSize.length+1,
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber

    }}, function(){
      this.props.addParticipant(this.state.newParticipant);
     // console.log(this.state);
    });
  
 e.preventDefault();
    alert("added participantsucsessfull"+this.state.email+this.state.name+this.state.phoneNumber);
  }

 canBeSubmitted() {
    const errors = this.validate(this.state.email, this.state.name, this.state.phoneNumber);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
 
 handleBlur = (field) => (e) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }



  render() {
      const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };
    
    const errors = this.validate(this.state.email, this.state.name, this.state.phoneNumber);
  //was isDisabled
    const isEnabled = Object.keys(errors).some(x => errors[x]);
  
    return(
 
     <div>
		  <h3> Add Project</h3>
        <form id="addParticipantForm" onSubmit={this.handleSubmit.bind(this)}>

          <div>
            <lable>Name</lable>
            <input 
               className={shouldMarkError('name')? "error" : "" }
              type="text"
               placeholder="Full name"
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}  />
          </div>
           <div>
            <lable>Email</lable>
              <input
                className={shouldMarkError('email') ? "error" : ""}
                type="email"
                placeholder="E-mail adress"
                value={this.state.email}
                onChange={this.handleEmailChange.bind(this)}
              />
            </div>
           <div>
            <lable>Phone number</lable>
            <input  
             className={shouldMarkError('phoneNumber') ? "error" : ""}
              type="text"
              value={this.state.phoneNumber}
              placeholder="Phone number"
              onChange={this.handlePhoneNumberChange.bind(this)}  />
          </div>
          <button type="submit" value="submit" disabled={this.isEnabled}>Add new</button>
        </form>

     </div>
    
     
    );
  }
}

AddParticipantContainer.propTypes = {
  addParticipant: PropTypes.func,
  canBeSubmitted: PropTypes.object,
  handleBlur: PropTypes.func,
  handleSubmit:PropTypes.func,
  handleNameChange:PropTypes.func,
  handleEmailChange:PropTypes.func,
  handlePhoneNumberChange:PropTypes.func,
  validate:PropTypes.func,
};

export default AddParticipantContainer;

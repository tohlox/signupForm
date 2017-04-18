import React,{ Component } from 'react';


class AddParticipantContainer extends Component {
  constructor(){
    super();


    this.state = {
      newParticipant: {},
     // paticipant_list_size: this.props.participantListSize.length
    }
  }

/*isNumeric(n) {
  return !Number.isNaN(parseFloat(n)) && Number.isFinite(n);
}*/
   
 handleSubmit(e){
  //var isnum = (/^\d+$/.test(val));
  if(this.refs.name.value === ''  ){
    alert('Please input name');

  } if(this.refs.phone.value === ''){
    alert('Please input ´phone');
  } else{

    this.setState({newParticipant:{
      id: this.props.participantListSize.length+1,
      name: this.refs.name.value,
      email: this.refs.email.value,
      phoneNumber: this.refs.phone.value
    }}, function(){
      this.props.addParticipant(this.state.newParticipant);
     // console.log(this.state);
    });
  }
 e.preventDefault();
 }

 validate_email(email){
      //let filter = ^([a-zA-Z0-9_.-])+(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$;
    if ((email==='')) {
        return true;
    }
    return false;
}



  render() {

  
    return(
 
     <div>
		  <h3> Add Project</h3>
        <form  onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <lable>Name</lable>
            <input type="text" ref="name" />
          </div>
           <div>
            <lable>Email</lable>
            <input type="text" ref="email" />
          </div>
           <div>
            <lable>Phone number</lable>
            <input type="text" ref="phone" />
          </div>
           <input type="submit" value="Submit" />
        </form>

     </div>
    
     
    );
  }
}

export default AddParticipantContainer;

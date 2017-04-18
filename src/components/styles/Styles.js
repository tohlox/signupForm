import React,{ Component } from 'react';
import ParticipantList from '../views/Participant-list';


class Styles extends Component {


  render() {

    return(

    	
    	<div className="Styles">
    	<ParticipantList participantListStyles={this.state.participantListStyles}/>

   
    
     </div>
   
  
    );
  }
}

export default Styles;

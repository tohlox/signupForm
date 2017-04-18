import React,{ Component } from 'react';
import ParticipantList from '../views/Participant-list';

class ParticipantsListContainer extends Component {

  render() {
    let participants;
    //Maps trough participants and passes them to <ParticipantList/> 
    //and assignes a key and passes participant. 
  	participants = this.props.participantList.map(participant => {
  		console.log(participant);
  	
    return ( 
  		<ParticipantList key={participant.id} participant={participant} />
  	);
  	});

    return(
 
     <div className="ParticipantsListContainer">
		  {participants}
     </div>
     
    );
  }
}

export default ParticipantsListContainer;

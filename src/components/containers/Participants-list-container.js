import React,{ Component } from 'react';
import ParticipantList from '../views/Participant-list';

class ParticipantsListContainer extends Component {
  deleteParticipant(id){
    this.props.onDelete(id);
  }

  render() {
    let participants;
    //Maps trough participants and passes them to <ParticipantList/> 
    //and assignes a key and passes participant. 
  	participants = this.props.participantList.map(participant => {
  		console.log(participant);
  	
    return ( 
  		<ParticipantList onDelete={this.deleteParticipant.bind(this)} key={participant.id} participant={participant} />
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

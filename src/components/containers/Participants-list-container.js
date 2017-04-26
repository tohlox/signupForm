import React,{ Component } from 'react';
import ParticipantList from '../views/Participant-list';
import PropTypes from 'prop-types';


class ParticipantsListContainer extends Component {
  deleteParticipant(id){
    this.props.onDelete(id);
  }
editParticipant(id){

}

  render() {
    let participants;
    //Maps trough participants and passes them to <ParticipantList/> 
    //and assignes a key and passes participant. 
  	participants = this.props.participantList.map(participant => {
  		console.log(participant);
  	
    return ( 
  		<ParticipantList onEdit={this.editParticipant.bind(this)} onDelete={this.deleteParticipant.bind(this)} key={participant.id} participant={participant} />
  	);
  	});

    return(
 
     <div className="ParticipantsListContainer">
		  {participants}
     </div>
     
    );
  }
}
ParticipantsListContainer.propTypes = {
  deleteParticipant: PropTypes.func,
  participants: PropTypes.object,
  onDelete:PropTypes.func,

 
 
};


export default ParticipantsListContainer;

import React,{ Component } from 'react';
import ParticipantList from '../views/Participant';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

class ParticipantsListContainer extends Component {



  deleteParticipant(id){
    this.props.onDelete(id);
  }

  handleEditedParticipant(editedParticipant){
    const id = editedParticipant.id;
    const participants = this.props.participantList;
    const index = participants._cache.findIndex(x => x.id === id);
    const updatedParticipant= update(participants._cache[index],{$merge: {name: editedParticipant.name, email: editedParticipant.email, phoneNumber: editedParticipant.phoneNumber}});
          
      this.props.participantList._cache.splice(index,1,updatedParticipant );
      console.log(this.props.participantList);
     /*let newData = update(participants, {
       $splice: [[index, 1, updatedParticipant]]
    });*/
   //this.setState({participantList: participants});
//new

   this.props.handleChangedParticipant(this.props.participantList);
 //console.log(newData);

     //participants._cache.splice(index,1);
     //this.setState({participantList:participants});

  }
  /*sortParticipant(field){
    this.props.handleSort(field);
  }*/

  render() {
      let participants;
    //Maps trough participants and passes them to <ParticipantList/> 
    //and assignes a key and passes participant. 
    participants = this.props.participantList._cache.map(participant => { 
      return ( 
        <ParticipantList
          key={participant.id}
          participant={participant}    
          onDelete={this.deleteParticipant.bind(this)}
          editParticipant={this.handleEditedParticipant.bind(this)} />
      );
    });
          
     return(
     
     <div className="ParticipantsListContainer"> 
     <div>
       {/*<button type="button" name="name" onClick={this.sortParticipant.bind(this,'Name')}>name</button>*/}
     </div>
      <table className="table">
      <thead className="thead-inverse">

        <tr>
           
            <th>Name</th>
           
            <th>E-mail</th>
            <th>Phone</th>
        </tr>
      </thead>
      </table>
     <div className="participantsContainer">
     
          {participants} 
    
      </div>
       
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

import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/participantList.css';


class ParticipantList extends Component {

  deleteParticipant(id){
    this.props.onDelete(id);
    //console.log('test');

  }
  editParticipant(id){
  this.props.onEdit(id);
  }


  render() {


  	 /* *Returning name,email,phone of participantList * */
    return(
       
     <div className="container">
      
      <ul  className="list-inline">
          
        <li className="list-inline-item">
          <p id="pTagText" >{this.props.participant.name} </p>
        </li>
        
          <li id="emailListStyle" className="list-inline-item">
            <p id="pTagText"> {this.props.participant.email}</p>
          </li>
        
         <li  className="list-inline-item">
          <p id="pTagText">{this.props.participant.phoneNumber}
            <a href="#" onClick={this.deleteParticipant.bind(this,this.props.participant.id)}> <span className="glyphicon">&#xe020;</span></a>
            <a href="#" onClick={this.editParticipant.bind(this,this.props.participant.id)}> <span className="glyphicon glyphicon-pencil"></span></a>
          </p>
         </li>
      </ul>
    </div>
      
    );
  }
}
ParticipantList.propTypes = {
  deleteParticipant: PropTypes.func,
  onDelete: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
 
 
};


export default ParticipantList;


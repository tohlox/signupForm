import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/participant.css';


class Participant extends Component {
  constructor(props){
    super(props);

     this.state = {
      editing: false     
    }
    this.handleEditItem = this.handleEditItem.bind(this); 
  }

  deleteParticipant(id){
    //passes id to handleDelete function.
    this.props.onDelete(id);

    console.log(id);
  }

  handleEditItem(e) {
    //Gets id from id put to state
    let participantId = e.id;
    console.log(participantId);
     //sets editedPaticipant = values in the input fields
    this.setState({editedParticipant:{
      id: participantId,
      name: this.refs[ `name_${ participantId }` ].value,
      email: this.refs[ `email_${ participantId }` ].value,
      phoneNumber: this.refs[ `phoneNumber_${ participantId }` ].value
      //Passes editedParticipant to editParticipant function
    }}, function(){
          this.props.editParticipant(this.state.editedParticipant);

        });
        //Editing back to null when button clicked and participant edited
        this.setState( { editing: false } ); 
  }
 

  toggleEditing() {
    if(this.state.editing === false){
      this.setState( { editing: true } );
    }else{
      this.setState( { editing: false } );
    }   
  }
  renderParticipant(participant){
      return (
          <div className="container" key={participant.id}>
            <table className="table">
              <tbody>
                <tr className="active">
                  <td id="nameListStyle" onClick={ this.toggleEditing.bind(this) }>
                     <p id="pTagText"> { participant.name }</p>
                  </td>
                    <td id="emailListStyle" onClick={ this.toggleEditing.bind(this) }>
                       <p id="pTagText">{participant.email}</p>
                    </td>
                      <td id="phoneListStyle" onClick={ this.toggleEditing.bind(this) }>
                        <p id="pTagText">{participant.phoneNumber}</p>
                      </td>
                        <td id="editAndDeleteStyle">
                        <a  href="#" onClick={ this.toggleEditing.bind(this) }> <span className="glyphicon glyphicon-pencil"></span></a>
                        <a  href="#" onClick={this.deleteParticipant.bind(this,participant.id)}> <span className="glyphicon">&#xe020;</span></a>
                        </td>
                </tr>
              </tbody>
            </table>
          </div>
  )}

  editParticipant(participant){
    return( 
     <div className="container" key={ `editing-${ participant.id }` }>   
      <form className="form-inline" >
        <div className="form-group"> 
          <input
            type="text"
            className="form-control"
            ref={ `name_${ participant.id }` }
            name="name"
            defaultValue={ participant.name }
          />
        </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                ref={ `email_${ participant.id }` }
                name="email"
               defaultValue={ participant.email }
              />
            </div> 
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                ref={ `phoneNumber_${ participant.id }` }
                name="phoneNumber"
                defaultValue={ participant.phoneNumber }
              />
          </div>
            <button className="btn btn-default" onClick={ this.handleEditItem.bind(this, participant) } type="button" value="Save" >Save</button>
            <button className="btn btn-default" onClick={ this.toggleEditing.bind(this)  } type="button" value="Cancel" >Cancel</button>
       
        </form>
       </div>
    );
  }

  render() {
  	/* *Returning name,email,phone of participantList * */
    if( this.state.editing === false)
      return this.renderParticipant(this.props.participant)
    else{
      return this.editParticipant(this.props.participant)
    }
  }
}
Participant.propTypes = {
  deleteParticipant: PropTypes.func,
  toggleEditing:PropTypes.func,
  handleEditItem:PropTypes.func,
  handleCancel:PropTypes.func,
  renderItemOrEditField:PropTypes.func,
  handleEditField:PropTypes.func,
  onDelete: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
};


export default Participant;


import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import ParticipantsListContainer from './components/containers/Participants-list-container';
import AddParticipantContainer from './components/containers/AddParticipant-container';
import FakeParticipantList from './components/containers/FakeParticipant-list-container';
import update from 'immutability-helper';
import './App.css';

/*Your task is to create a small signup form and a list of participants with React that meets the following requirements:

*Use Create React App to scaffold your application

*Generate 20 participants that contain randomized values for the following properties: id, name, email address, and phone number

*Render a table that displays the participants on individual rows

*Create a form for adding new participants to the table (remember to validate the form)

*Make each participant editable by clicking on a table cell (inline editing)

*Add support for deleting rows

*Make each column sortable upon clicking on a column header

*Write a developer-friendly installation guide

*Deploy a live build on the internet*/

class App extends Component {
  constructor(){
    super();

    this.state = {
      participantList:[]
    }
   }

  componentWillMount(){
    this.fetchParticipants();
  }

  fetchParticipants(){
    //Creates 20 new random participants
    this._dataList = new FakeParticipantList(20);
    this._dataList.getAll();
    this._defaultSortIndexes = [];

    let size = this._dataList.getSize();
      for (let index = 0; index < size; index++) {
        this._defaultSortIndexes.push(index);
      }

    //Sets state participantList = this._datalist 
    //that contains an array of objects with all participants info.
    this.setState({participantList: this._dataList});
    
    //console.log(this.state.participantList._cache

  }

  handleAddParticipant(participant){
    const participants = this.state.participantList;
    const participantsUpdated = participants;
    participantsUpdated._cache = update(participants._cache, {$push: [participant]}); // => [1, 2, 3, 4]

  // participants._cache.push(participant);
   console.log(participantsUpdated);
   //this.props.addParticipant(participant);
   this.setState( { participantList:participantsUpdated} );
  //console.log(participant);
  }
  handleDeleteParticipant(id){
    const participants = this.state.participantList
    console.log(participants);

    participants._cache = this.state.participantList._cache.filter((participant) => {
      if(participant.id !== id) return participant;
    });

    console.log(participants);
    this.setState({participantList: participants})
  }

    handleChangedParticipant(participantList){
   //console.log(participantList+"hello")
    this.setState({participantList: participantList})
   
  }

  sortParticipants(field){
    
      console.log(field)
  }

  render() {
    return(    
      <div className="App">
        <div className="Header">
        </div>
          <div className="Main-content">
            <div className="addParticipant">
              <AddParticipantContainer addParticipant={this.handleAddParticipant.bind(this)} />
            </div>
              {/*Pases radom participantList to ParticipantsListContainer*/}
              <ParticipantsListContainer
              participantList={this.state.participantList} 
              onDelete={this.handleDeleteParticipant.bind(this)}  
              handleChangedParticipant={this.handleChangedParticipant.bind(this)} 
              sortParticipants={this.sortParticipants.bind(this)}              />
          </div>
      </div>
    );
  }
}
App.propTypes = {
    _dataList: PropTypes.func,
   handleAddParticipant:PropTypes.func,
   handleDeleteParticipant:PropTypes.func,
};

export default App;

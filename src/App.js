import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import ParticipantsListContainer from './components/containers/Participants-list-container';
import AddParticipantContainer from './components/containers/AddParticipant-container';
import FakeParticipantList from './components/containers/FakeParticipant-list-container';

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
   let participants = this.state.participantList;
   participants._cache.push(participant);
   this.setState({participantList:participants});
  //console.log(participant);
  }
  handleDeleteParticipant(id){
     let participants = this.state.participantList;
     let index = participants._cache.findIndex(x => x.id === id);
     participants._cache.splice(index,1);
     this.setState({participantList:participants});
  }

  render() {
    return(    
      <div  className="App">
      <AddParticipantContainer participantListSize={this.state.participantList._cache} addParticipant={this.handleAddParticipant.bind(this)} />


        {/*Pases radom participantList to ParticipantsListContainer*/}
        <ParticipantsListContainer participantList={this.state.participantList._cache} onDelete={this.handleDeleteParticipant.bind(this)}/>

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

import React,{ Component } from 'react';
import ParticipantsListContainer from './components/containers/Participants-list-container';
import AddParticipantContainer from './components/containers/AddParticipant-container';
import FakeParticipantList from './components/containers/FakeParticipant-list-container';
import './App.css';

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

export default App;

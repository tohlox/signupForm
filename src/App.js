import React,{ Component } from 'react';
import ParticipantsListContainer from './components/containers/Participants-list-container';
import FakeParticipantList from './components/containers/FakeParticipant-list-container';
import './App.css';

class App extends Component {
constructor(){
  super();

  //Creates 20 new random participants
  this._dataList = new FakeParticipantList(20);
  this._dataList.getAll();

  this._defaultSortIndexes = [];

    var size = this._dataList.getSize();
    for (var index = 0; index < size; index++) {
      this._defaultSortIndexes.push(index);
    }
    //Sets state participantList = this._datalist 
    //that contains an array of objects with all participants info.
  this.state = {
  participantList: this._dataList

};
 console.log(this.state.participantList._cache
  );
}

  render() {
    return(

      
   <div  className="App">
   
   
   <ParticipantsListContainer participantList={this.state.participantList._cache}/>

     </div>
    );
  }
}

export default App;

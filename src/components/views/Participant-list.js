import React,{ Component } from 'react';
//import Styles from '../styles/Styles';

class ParticipantList extends Component {



  render() {
    /* *  Styles for ParticipantList * */
    //Main container
    const containerStyle = {
    marginLeft: 600,
    width: 912 

    }
    //Ul 
    const ulStyle = {
      backgroundColor: '#fff',
      marginBottom:1,
      textColor:'#fff'
    }

    //name section of list
     const nameListStyle = {
    
    listStyle: 'none',
     backgroundColor: '#fff',
     height: 72,
     width: 180,
     paddingLeft:24,
     paddingTop:26

  };
    //email section of list
   const emailListStyle = {
    
    listStyle: 'none',
     backgroundColor: '#fff',
     height: 72,
     width: 260,
     paddingLeft:24,
      paddingTop:26

  };
  //phone section of list
     const phoneListStyle = {
    
    listStyle: 'none',
     backgroundColor: '#fff',
     height: 72,
     paddingLeft:24,
     paddingTop:26

  };
    //p tag of list

     const listText = {
    
    color:'#505050',
    fontSize: 16,
    //lineHeight:24,
    fontWeight:400

  };
  	 /* *Returning name,email,phone of participantList * */
    return(
       
     <div style={containerStyle} className="container">
      
      <ul style={ulStyle} className="list-inline">
          
        <li style={nameListStyle} className="list-inline-item">
          <p style={listText}>{this.props.participant.name}</p>
        </li>
          <li style={emailListStyle} className="list-inline-item">
            <p style={listText}> {this.props.participant.email}</p>
          </li>
         <li style={phoneListStyle} className="list-inline-item">
          <p style={listText}>{this.props.participant.phoneNumber}</p>
         </li>
      </ul>
    </div>
      
    );
  }
}

export default ParticipantList;


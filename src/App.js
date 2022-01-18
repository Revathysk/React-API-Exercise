import React, { Component } from 'react';
 

class Score extends Component {
  state = {
    score:0 
  }

  handleScore = (number) =>{
    //event.preventDefault()

    var currentScore = this.state.score
    console.log("inside handlescore", number)
     
     switch(number) {
     case 1 : currentScore =+1; console.log(currentScore); break;
     case 2 : currentScore =-1; console.log(currentScore); break; 
     case 3 : currentScore= 0;  console.log(currentScore); break;  
     default: console.log("Error occurred processing Scores");
    }
  
    this.setState({ score: currentScore })
  }
 
render() {
   
      return (
      <div class='score' >
        <h2> SCORE: {this.state.score} </h2> 
        <button onClick={()=> {this.handleScore(1)}}> Increase</button> 
        <button onClick={()=> {this.handleScore(2)}}> Decrease</button>
        <button onClick={()=> {this.handleScore(3)}}> Reset </button>
     </div>      
    );
  }
}

class App extends Component {
  state={
    baseURL: 'http://jservice.io/api/random',
    score:0,
    dataFetch:[]
  }
// handleChange =(event) =>
// {this.setState({
//   [event.target.id] : event.target.value })
// }


handleFetch=(e)=> {

e.preventDefault()  

fetch(this.state.baseURL)
  .then(response => response.json())
  .then(data => this.setState ({dataFetch : data}))
  .catch(error => console.log(error))

   console.log("Datafetch",this.state.dataFetch[0] )
  // console.log("Questions",this.state.dataFetch[0].question )
  // console.log("category ID",this.state.dataFetch[0].category_id )
  // console.log("Points",this.state.dataFetch[0].answer )
  // console.log("Answer",this.state.dataFetch[0].value )
}

render() {
  return (
    <div id='main-container'>
      
      <h1>Welcome to Jeopardy</h1>
      <h2> Let's Play </h2>
      <button onClick = {this.handleFetch}>  Get Question </button>

      <Score />      
      
      <div>
        {this.state.dataFetch.map((trivia) => { 
          return(
            <div id="quiz">
              <div> 
                <h2> Question : {this.state.dataFetch[0].question}  </h2>
                <h4> Category : {this.state.dataFetch[0].category_id} </h4>
                <h4> Points   : {this.state.dataFetch[0].value} </h4>            
              </div>

              <div class='hide' id='answer'>
                <h2> Answer  : {this.state.dataFetch[0].answer}  </h2>
               </div>
            </div>
          )}
        )}
         
      </div> 

    </div>
    );
  }
}
 
export default App;
 
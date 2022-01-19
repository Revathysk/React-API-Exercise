import React, { Component } from 'react';
 

class Score extends Component {
  state = {
    score: 0
  }

  incrementScore = () => {
    console.log('increment');
    this.setState({ score: this.state.score + 1 });
  }

  decreaseScore = () => {
    console.log('decrement');
    this.setState({ score: this.state.score - 1 });
  }
  
  resetScore = () => {
    console.log('reset');
    this.setState({score: 0 })
  }
  // handleScore = (number) =>{
      //event.preventDefault()
    // let currentScore = this.state.score
    // console.log("inside handlescore", this.state.score)
     
    //  switch(number) {
    //  case 1 : currentScore =+1; console.log(currentScore); break;
    //  case 2 : currentScore =-1; console.log(currentScore); break; 
    //  case 3 : currentScore= 0;  console.log(currentScore); break;  
    //  default: console.log("Error occurred processing Scores");
    // }

    // this.setState({ score: currentScore })
  // }
 
render() {
   
      return (
      <div className='score' >
        <h2> SCORE: {this.state.score} </h2> 
        <button onClick={()=> {this.incrementScore()}}> Increase</button> 
        <button onClick={()=> {this.decreaseScore()}}> Decrease</button>
        <button onClick={()=> {this.resetScore()}}> Reset </button>
     </div>      
    );
  }
}

class App extends Component {
  state={
    baseURL: 'http://jservice.io/api/random',
    // score:0,
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
      <button onClick = {this.handleFetch}> Get Question </button>

      <Score/>      
      
      <div>
        {this.state.dataFetch.map((trivia,i) => { 
          return(
            <div key={trivia.id} id="quiz">
              <div> 
                
                <h2 id='question'> Question : {trivia.question}  </h2>
                <h3> Category : {trivia.category.title} </h3>
                <h3> Points   : {trivia.value} </h3>            
              </div>

              <div className='hide' id='answer'>
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
 
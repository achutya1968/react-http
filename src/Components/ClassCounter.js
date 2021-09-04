import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0 
        }
    }

    Increment = () =>{
        this.setState(prevState => ({
            count:prevState.count + 1
        }));

    }

    Decrement =()=>{
       this.setState(prevState =>({
            count:prevState.count - 1
       }))
       
    }
    Reset = ()=>{
        this.setState({
            count:0
        })
    }


    render(){
        //const {count} = this.state
        return (
          <div>
            <button onClick={this.Increment}>Increment</button>
            <button onClick={this.Reset}>Reset</button>
            <button onClick={this.Decrement}>Decrement</button>
            <h2>Counter: {this.state.count}</h2>
          </div>
        );
    }
}

export default ClassCounter

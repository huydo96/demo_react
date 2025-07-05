import React from "react";

class UserInfor extends React.Component{
    state = {
        name: `huy`,
        address: `hat mon`,
        age: `21`
    };

    handleOnMouseOver(event){
        console.log(event.pageX);
    }

    handleChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })        
    }

    handleChangeAge = (event) => {
        this.setState({
        age: event.target.value
        })        
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
                <form onSubmit={(event) =>{this.handleOnSubmit(event)}}>
                    <label>Your name:</label>
                    <input type ="text" onChange={(event) => {this.handleChangeInput(event)}}/>
                    <label>Your age:</label>
                    <input type="text" onChange={(event) => {this.handleChangeAge(event)}}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;
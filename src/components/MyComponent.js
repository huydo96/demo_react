import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./Displayinfor";

class MyComponent extends React.Component{
    render(){
        const myInfor = ['a', 'bbb', 'c'];
        return(
            <div>
                <UserInfor/>
                <br/>
                <br/>
                <DisplayInfor name="do xuan huy" age="21"/>
                <DisplayInfor name={"huyyyyy"} age={21} myInfor={myInfor} />
            </div>
        );
    }
}
export default MyComponent;
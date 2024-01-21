import React from "react";

export class ClassExample extends React.Component {
    constructor(){
      super();
      this.value = 42;

      // Regular function
      // this.regularFunction = function() {
      //   console.log("Regular function:", this.value);
      // };

      //We have to Bind the regular function to the component instance in the constructor
      this.regularFunction = this.regularFunction.bind(this);

      // Arrow function
      this.arrowFunction = () => {
        console.log("Arrow function:", this.value);
      };
    }

    regularFunction() {
      console.log("Regular function (bound):", this.value);
    }
    render(){
      return(
        <div>
          <button onClick={this.regularFunction}>Click1</button>
          <button onClick={this.arrowFunction}>Click2</button>
        </div>
      )
    }
  }
  
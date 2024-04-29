import React, { Component } from "react";
import './style.css'
class Data extends Component {
  render() {
    this.record = this.props.Data;
    return (
      <div className="cards">
        {this.record.map((val) => {
          return (
            <div key={val.grid} className="main-card">
              <div className="card">
              
                <h2>empid :  {val.empid}</h2>
                <h3>empname : {val.empname}</h3>
                <p>empemail : {val.empemail}</p>
                <p>empphone: {val.empphone}</p>
                <p>empaddress: {val.empaddress}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Data;

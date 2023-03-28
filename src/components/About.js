import React, { Component } from "react";

export default class About extends Component {
  render() {
    let data = this.props.data;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/celesteFace.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{data.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{data.name}</span>
                  <br></br>
                  <span>{data.address}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

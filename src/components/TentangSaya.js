import React, { Component } from "react";
import Profile from "../assets/img/profile.png";

class TentangSaya extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="bungkus">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={Profile} className="img-profile"></img>
              </div>
              <div className="col">
                <h2 className="name-profile">Muhammad Indra Adha</h2>
                <h3>Learner</h3>
                <p className="about-profile">
                    Im currently college student who want to be software engineer/related field. I've a lot of interest in software development,i have studied web development, UI UX, and make some personal projects.
                </p>
                <div className="soc-profile">
                    <a target="_blank" href="https://www.linkedin.com/in/indraadha/">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/aku.indra_/">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" href="https://github.com/amindraa05">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TentangSaya;

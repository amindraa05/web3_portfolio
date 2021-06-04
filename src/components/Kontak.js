import React, { Component } from "react";

class Kontak extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="bungkus">
          <div className="kontak-cont">
            <h1>Get In Touch</h1>
            <h5>Contact/Direct Message me by click on this platform below..</h5>
            <br></br>
            <div className="kontak-soc">
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
    );
  }
}

export default Kontak;

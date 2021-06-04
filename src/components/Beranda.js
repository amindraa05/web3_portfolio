import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profile from "../assets/img/profile.png";

class Beranda extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="beranda-grid">
          <Cell col={12}>
            <img src={Profile} alt="avatar" className="avatar-img"></img>
            <div className="banner-text">
              <h1>Web 3 Master</h1>
              <hr />
              <p>
                HTML/CSS | PHP | MySQL | Bootstrap | JS | React Js | React
                Native | Laravel
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/indraadha/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/aku.indra_/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a target="_blank" href="https://github.com/amindraa05">
                  <i class="fab fa-github"></i>
                </a>
                <a target="_blank" href="">
                  <i class="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
        <h2>Beranda</h2>
      </div>
    );
  }
}

export default Beranda;

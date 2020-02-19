import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.styles.css";
import logo from "../assets/images/logo.png";

import HeaderDropdown from "../UiElements/HeaderDropdown/HeaderDropdown.component";

class Header extends Component{

  state = { 
    data : "HELP", 
    data_2 : "Hello World 2"  
  } 

    render(){
      return (
          <header className="blue-gradient-bg">
          <div className="header-strip-container">
              <div className="header-logo-area blue-gradient-bg">
                  <a href="./"><img src={logo} alt="Angelertrip" /></a>
              </div>

              <div className="header-right-panel">
                  
                  <HeaderDropdown dropdownName = {this.state.data} />
                  <HeaderDropdown dropdownName = {this.state.data_2} />

                  
                  {/* <div className="header_dropdown_wrap">
                      <div className="headerDropdown countryouter" id=""><img src="assets/images/eng.png" alt=""/>ENGLISH</div>
                      <div className="inercountry">
                          <a href="index.html"><span>ENGLISH</span></a>
                          <a href="index.html"><span>FRENCH</span></a>
                      </div>
                  </div> */}
                  
              </div>

          </div>
      </header>
      );
    }

}

export default Header;
import Header from "./Header";
import "../styles/base.scss";

import React from "react";

class Layout extends React.Component {
  state = {
    activeMenu: false
  };

  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };

  render() {
    return (
      <div>
        <Header
          toggleMenu={this.toggleMenu}
          activeMenu={this.state.activeMenu}
        />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;

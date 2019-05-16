import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  menuStyle,
  rightHeaderInfoStyle,
  leftHeaderInfoStyle,
  comTextStyle
} from "../helpers/styleHelper";
import { Container, Menu } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <div>
        <Menu fixed={true} style={menuStyle} pointing secondary>
          <Container fluid>
            <Menu.Item as={Link} to="/" exact="true">
              <Menu.Item header style={leftHeaderInfoStyle}>
                hepsiburada<div style={comTextStyle}>.com</div>
              </Menu.Item>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Menu.Item style={rightHeaderInfoStyle}>
                  <b>Link</b>VOTE Challenge
                </Menu.Item>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default Header;

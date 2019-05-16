import React, { Component } from "react";
import { Link } from "react-router-dom";
import { menuStyle } from "../helpers/styleHelper";
import { Container, Menu } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <div>
        <Menu fixed={false} style={menuStyle} pointing secondary>
          <Container text>
            <Menu.Item as={Link} to="/" exact="true">
              <Menu.Item header>hepsiburada.com</Menu.Item>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Menu.Item header>LinkVOTE Challenge</Menu.Item>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default Header;

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {fixedMenuStyle, menuStyle} from "../helpers/styleHelper";
import { Container, Visibility, Menu } from 'semantic-ui-react';

class Header extends Component {
	state = {
		menuFixed: null,
		overlayFixed: false,
	};

	stickTopMenu = () => this.setState({ menuFixed: true });
	unStickTopMenu = () => this.setState({ menuFixed: null });

	render() {
		const { menuFixed } = this.state;

		return (
			<div>
				<Visibility
					onBottomPassed={this.stickTopMenu}
					onBottomVisible={this.unStickTopMenu}
					once={false}
				>
					<Menu
						fixed={menuFixed && 'top'}
						style={menuFixed ? fixedMenuStyle : menuStyle}
						pointing secondary
					>
						<Container text>
							<Menu.Item as={Link} to="/" exact="true">
								<Menu.Item header>hepsiburada.com</Menu.Item>
							</Menu.Item>
							<Menu.Menu position='right'>
							<Menu.Item>
								<Menu.Item header>LinkVOTE Challenge</Menu.Item>
							</Menu.Item>
							</Menu.Menu>
						</Container>
					</Menu>
				</Visibility>
			</div>
		);
	}
}

export default Header;
import React from 'react';
import { Container, Image, List, Segment } from 'semantic-ui-react';
import twitterLogo from '../twitter.svg';
const Footer = props => {
	return (
		<div>
			<Segment
				inverted
				style={{ margin: '5em 0em 0em', padding: '2em 0em' }}
				vertical
			>
				<Container textAlign='center'>
					<Image src='https://react.semantic-ui.com/logo.png' centered size='mini' />
					<div className="twitter">
						<a href="https://twitter.com/Serkan_Kesen" target="_blank">
							<img
								src={twitterLogo}
								width={26}
								alt="serkan kesen twitter" />
							<span>@Serkan_Kesen</span>
						</a>
					</div>
				</Container>
			</Segment>
		</div>
	);
};

export default Footer;
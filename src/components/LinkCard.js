import React from 'react'
import { Card, Grid, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const extra = (link, deleteLink) => {
	return(
		<div className="ui two buttons">
			<Button animated as={Link} to={`/link/${link._id}`}>
				<Button.Content visible>Edit</Button.Content>
				<Button.Content hidden>
					<Icon name='right arrow' />
				</Button.Content>
			</Button>
			<Button animated='vertical' onClick={() => deleteLink(link._id)}>
				<Button.Content hidden>Delete</Button.Content>
				<Button.Content visible>
					<Icon name='trash' />
				</Button.Content>
			</Button>
		</div>
	);
};

const LinkCard = ({ link, deleteLink }) => (
	<Grid.Column>
		<Card>
			<Card
				image={link.cover}
				header={ link.title}
				extra={extra(link, deleteLink)}
			/>
		</Card>
	</Grid.Column>
);

export default LinkCard;
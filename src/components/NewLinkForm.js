import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Form, Image, Message } from 'semantic-ui-react'
import InlineError from './InlineError';

class NewLinkForm extends Component {
	state = {
		_id: this.props.link ? this.props.link._id : '',
		title: this.props.link ? this.props.link.title : '',
		cover: this.props.link ? this.props.link.cover : '',
		errors: {},
		redirect: false
	};

	static propTypes = {
		onNewLinkSubmit: PropTypes.func.isRequired
	};

	componentWillReceiveProps(nextProps) {
		const { link } = nextProps.newLink;
		if (
			link.title
			&&
			link.title !== this.state.title
		) {
			this.setState({
				title: link.title,
				cover: link.cover,
			});

		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = () => {
		const errors = this.validate();
		this.setState({
			errors,
			redirect: true
		});

		const _id = this.state._id || this.props.newLink.link._id;

		if (Object.keys(errors).length === 0) {
		  if (!_id)
				this.props.onNewLinkSubmit(this.state);
			else
				this.props.onUpdateLinkSubmit({ ...this.state, _id});
		}
	};

	validate = () => {
		const errors = {};
		if (!this.state.title) errors.title = "Can't be blank."
		if (!this.state.cover) errors.cover = "Can't be blank."
		return errors;
	};

	render() {
		const {errors} = this.state;
		const form = (
			<Form onSubmit={this.onSubmit} loading={this.props.newLink.fetching || this.props.newLink.link.fetching}>
				<Form.Field>
					<label>Link Name:</label>
					{ errors.title && <InlineError message={errors.title} /> }
					<input
						id="title"
						name="title"
						value={this.state.title}
						onChange={this.handleChange}
						placeholder='e.g Alphabet' />
				</Form.Field>
				<Form.Field>
					<label>Link URL:</label>
					{ errors.cover && <InlineError message={errors.cover} /> }
					<input
						id="cover"
						name="cover"
						value={this.state.cover}
						onChange={this.handleChange}
						placeholder='e.g. http://abc.xyz' />
				</Form.Field>
				<Image src={this.state.cover} size='small' />
				<div className="clearfix"></div>
				<Button type='submit'>ADD</Button>

				{
					this.props.newLink.error.response
					&&
					(
						<Message negative>
							<Message.Header>We`re Sorry</Message.Header>
							<p>A problem occured while recording.</p>
						</Message>
					)
				}
			</Form>
		);
		return (
			<div>
				{
					this.props.newLink.done && this.state.redirect
						? <Redirect to="/links" /> : form
				}
			</div>
		);
	}
}
export default NewLinkForm;
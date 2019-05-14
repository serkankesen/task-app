import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Form, Image, Message } from 'semantic-ui-react'
import InlineError from './InlineError';

class NewLinkForm extends Component {
	state = {
		name: this.props.link ? this.props.link.name : '',
		url: this.props.link ? this.props.link.url : '',
		errors: {},
		redirect: false
	};

	static propTypes = {
		onNewLinkSubmit: PropTypes.func.isRequired
	};

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

		

		if (Object.keys(errors).length === 0) {
			this.props.onNewLinkSubmit(this.state);
		}
	};

	validate = () => {
		const errors = {};
		if (!this.state.name) errors.name = "Can't be blank."
		if (!this.state.url) errors.url = "Can't be blank."
		return errors;
	};

	render() {
		const {errors} = this.state;
		const form = (
			<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<label>Link Name:</label>
					{ errors.name && <InlineError message={errors.name} /> }
					<input
						id="name"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
						placeholder='e.g Alphabet' />
				</Form.Field>
				<Form.Field>
					<label>Link URL:</label>
					{ errors.url && <InlineError message={errors.url} /> }
					<input
						id="url"
						name="url"
						value={this.state.url}
						onChange={this.handleChange}
						placeholder='e.g. http://abc.xyz' />
				</Form.Field>
				<div className="clearfix"></div>
				<Button type='submit'>ADD</Button>
			</Form>
		);
		return (
			<div>
				{
					
					this.props.links && this.props.links.done
						? <Redirect to="/" /> : form
				}
			</div>
		);
	}
}
export default NewLinkForm;
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// import {
// 	fetchLinks,
// 	deleteLink
// } from '../../actions/links';
import LinksList from "../LinksList";

class LinksPage extends Component {
  static propTypes = {
    links: PropTypes.object.isRequired,
    deleteLink: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchLinks();
  }

  render() {
    return (
      <div>
        <h2>Links</h2>
        {/* <LinksList
					deleteLink={this.props.deleteLink}
					links={this.props.links} /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ links }) => {
  return {
    links
  };
};

const mapDispatchToProps = {
  // fetchLinks,
  // deleteLink
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinksPage);

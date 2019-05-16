import React, { Component } from "react";
import { connect } from "react-redux";
import NewLinkForm from "../NewLinkForm";
import { onNewLinkSubmit, onUpdateLinkSubmit } from "../../actions/links";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NewLinkPage extends Component {
  componentDidMount() {
    const { match } = this.props;
    // if (!this.props.link && match.params._id) {
    //   this.props.fetchLink(match.params._id);
    // }
  }

  render() {
    return (
      <div>
        <Button icon labelPosition="left" as={Link} to="/" exact="true">
          Return to List
          <Icon name="arrow left" />
        </Button>
        <h2>Add New Link</h2>
        <NewLinkForm
          links={this.props.links}
          onNewLinkSubmit={this.props.onNewLinkSubmit}
          onUpdateLinkSubmit={this.props.onUpdateLinkSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ links }, props) => {
  return {
    links: links
  };
};

const mapDispatchToProps = {
  onNewLinkSubmit,
  onUpdateLinkSubmit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewLinkPage);

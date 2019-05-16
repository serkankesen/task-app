import React, { Component } from "react";
import LinkList from "../LinkList";
import { connect } from "react-redux";
import { onUpdateLinkSubmit, onRemoveLinkSubmit } from "../../actions/links";

class HomePage extends Component {
  render() {
    return (
      <div>
        <LinkList
          links={this.props.links}
          onUpdateLinkSubmit={this.props.onUpdateLinkSubmit}
          onRemoveLinkSubmit={this.props.onRemoveLinkSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ links }, props) => {
  return {
    links: links.link
  };
};

const mapDispatchToProps = {
  onUpdateLinkSubmit,
  onRemoveLinkSubmit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

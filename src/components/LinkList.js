import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  Grid,
  Button,
  Modal,
  Header,
  Icon,
  Select,
  Pagination
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import _ from "lodash";

class LinkList extends Component {
  state = {
    removeLink: "",
    sorting: "most",
    activePage: 1
  };

  paginate(array, page_size, page_number) {
    --page_number;
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  handlePaginationChange = (e, { activePage }) => {
    console.log(activePage);
    this.setState({ activePage });
  };

  handleChangeSorting = (e, data) => {
    this.setState({ sorting: data.value });
  };

  render() {
    const { sorting, activePage } = this.state;
    const orderOptions = _.map(
      [
        { key: "most", text: "Most Voted A -> Z", value: "most" },
        { key: "less", text: "Less Voted Z -> A", value: "less" }
      ],
      order => ({
        key: order.key,
        text: order.text,
        value: order.value
      })
    );
    return (
      <div>
        <Grid verticalAlign="middle" columns={1}>
          <Grid.Column>
            <Button
              content="SUBMIT A LINK"
              icon="plus"
              size="big"
              as={NavLink}
              to="/links/new"
            />
          </Grid.Column>
          <Grid.Column>
            <Select
              placeholder="Order By"
              options={orderOptions}
              onChange={this.handleChangeSorting}
            />
          </Grid.Column>
          {this.paginate(
            this.props.links.sort(function(a, b) {
              return sorting === "most" ? b.vote - a.vote : a.vote - b.vote;
            }),
            4,
            activePage
          )
          .map((link, key) => (
            <Grid.Column key={key}>
              <Card fluid>
                <Card.Content>
                  <Card.Header>
                    {link.vote} {link.vote > 1 ? "POINTS" : "POINT"}
                  </Card.Header>
                  <Card.Meta>{link.name}</Card.Meta>
                  <Card.Description>
                    {"("}
                    {link.url}
                    {")"}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui three buttons">
                    <Button
                      basic
                      color="gray"
                      onClick={() => this.props.onUpdateLinkSubmit(link, 5)}
                    >
                      <Icon name="arrow up" />
                      Up Vote
                    </Button>

                    <Button
                      basic
                      color="gray"
                      onClick={() => this.props.onUpdateLinkSubmit(link, -5)}
                    >
                      <Icon name="arrow down" />
                      Down Vote
                    </Button>
                    <Button
                      animated="vertical"
                      basic
                      color="red"
                      type="submit"
                      onClick={() => this.setState({ removeLink: link })}
                    >
                      <Button.Content hidden>Trash</Button.Content>
                      <Button.Content visible>
                        <Icon name="trash" />
                      </Button.Content>
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
          <Pagination
            activePage={activePage}
            firstItem={null}
            lastItem={null}
            pointing
            onPageChange={this.handlePaginationChange}
            secondary
            totalPages={Math.round(this.props.links.length / 4)}
          />
        </Grid>
        <Modal open={this.state.removeLink} basic size="small">
          <Header icon="archive" content="Remove Link" />
          <Modal.Content>
            <p>Do you want to remove:</p>
            <b>{this.state.removeLink.name}</b>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="red" inverted>
              <Icon
                name="remove"
                onClick={() => {
                  this.setState({ removeLink: "" });
                }}
              />{" "}
              No
            </Button>
            <Button color="green" inverted>
              <Icon
                name="checkmark"
                onClick={() => {
                  this.setState({ removeLink: "" });
                  this.props.onRemoveLinkSubmit(this.state.removeLink);
                }}
              />{" "}
              Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
LinkList.propTypes = {
  links: PropTypes.array.isRequired
};
LinkList.defaultProps = {};

export default LinkList;

import React from "react";
import PropTypes from "prop-types";
import LinkCard from "./LinkCard";
import { Grid } from "semantic-ui-react";
import { HashLoader } from "react-spinners";

const LinksList = ({ links, deleteLink }) => {
  const emptyMessage = <p>There are no link yet.</p>;

  const linksList = (
    <div>
      <HashLoader size={40} color={"#36bdb3"} loading={links.fetching} />

      {links.error.response ? (
        <h3>Error retrieving data!</h3>
      ) : (
        <Grid stackable columns={3}>
          {links.linkList.map(link => (
            <LinkCard key={link._id} deleteLink={deleteLink} link={link} />
          ))}
        </Grid>
      )}
    </div>
  );

  return <div>{links.length === 0 ? emptyMessage : linksList}</div>;
};

LinksList.propTypes = {
  links: PropTypes.shape({
    linkList: PropTypes.array.isRequired
  }).isRequired
};

export default LinksList;

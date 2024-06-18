import PropTypes from "prop-types";

function Empty({ resourceName }) {
  return <p>No {resourceName} could be found.</p>;
}

// PropTypes definition
Empty.propTypes = {
  resourceName: PropTypes.string.isRequired,
};

export default Empty;
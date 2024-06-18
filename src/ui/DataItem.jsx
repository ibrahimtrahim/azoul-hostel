import styled from "styled-components";
import PropTypes from "prop-types"; // Import PropTypes

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

// Define PropTypes
DataItem.propTypes = {
  icon: PropTypes.element.isRequired, // Assumes `icon` is a React element (e.g., an SVG component)
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DataItem;
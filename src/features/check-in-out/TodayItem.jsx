import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;
  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

// Define PropTypes for TodayItem and nested objects
TodayItem.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Ensuring `id` can be a string or number and is required
    status: PropTypes.oneOf(['unconfirmed', 'checked-in']).isRequired, // Restricting `status` to specific values and making it required
    guests: PropTypes.shape({
      countryFlag: PropTypes.string.isRequired, // Ensuring `countryFlag` is a required string
      country: PropTypes.string.isRequired, // Ensuring `country` is a required string
      fullName: PropTypes.string.isRequired // Ensuring `fullName` is a required string
    }).isRequired,
    numNights: PropTypes.number.isRequired // Ensuring `numNights` is a required number
  }).isRequired
};

export default TodayItem;
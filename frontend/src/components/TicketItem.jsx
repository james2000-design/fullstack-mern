import { Link } from "react-router-dom";

const TicketItem = ({ ticket }) => {
  return (
    <div className="ticket">
      <div>{new Date(ticket.createdAt).toLocaleString("en-US")} </div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.staus}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`}>view</Link>
    </div>
  );
};

export default TicketItem;

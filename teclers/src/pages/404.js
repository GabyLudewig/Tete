import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <br />
      <h1>
        Not found <br />
        <NavLink to="/">Return to Home</NavLink>
      </h1>
    </div>
  );
}

export { NotFound };

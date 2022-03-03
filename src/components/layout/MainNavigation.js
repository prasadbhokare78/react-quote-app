import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const history = useHistory();

  const defaultRouteHandler = () => {
    history.push("/quotes");
  };

  return (
    <header className={classes.header}>
      <div
        onClick={defaultRouteHandler}
        className={classes.logo}
        style={{ cursor: "pointer" }}
      >
        Great Quotes
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

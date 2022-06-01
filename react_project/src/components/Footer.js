import {NavLink} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <NavLink className='nav-link' exact='true' to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' to={'/note'}>Note</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' to={'/create'}>Create</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' to={'/about'}>About</NavLink>
        </li>
      </ul>
      <p className="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
  );
}
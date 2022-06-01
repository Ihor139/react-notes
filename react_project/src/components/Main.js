import {NavLink} from "react-router-dom";

export default function Main() {
  return (
    <div className="container-fluid">
        <div className="row row-cols-md-3 g-4 mt-0">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <NavLink to="/create" className='link-success'>Создать заметку</NavLink>
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <NavLink to="/note" className='link-info'>Посмотреть заметку</NavLink>
                </h5>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
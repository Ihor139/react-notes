import {NavLink} from "react-router-dom";

export default function About() {
  return (
    <div className="container-fluid">
      <div className="row g-4 mt-0">
        <div className="px-4 my-3">
          <h1 className="display-4 fw-bold">About</h1>
          <div className="col-lg-12">
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Adipisci aliquam exercitationem incidunt ipsa
              iure iusto mollitia necessitatibus nihil numquam officia
              possimus praesentium quae, quo similique sit
              vel voluptates voluptatibus? Iste! Architecto, at dolorum ex excepturi facilis
              hic illum nobis officiis quas quod quos ratione, rem
              temporibus. Ab ad cumque, fugiat neque
              nulla obcaecati omnis perspiciatis possimus recusandae. Ad, inventore, nostrum.
              Cupiditate dolor est illum ipsum itaque,
              numquam placeat quo repudiandae similique sit vel voluptas
              voluptate voluptatibus. Assumenda cum, dicta distinctio eveniet fugiat
              ipsam molestiae pariatur quos sapiente similique, ut vero.</p>
            <div className="d-grid gap-2 d-sm-flex mb-5">
              <NavLink to={'/create'} className="btn btn-primary">Создать заметку</NavLink>
              <NavLink to={'/note'} className="btn btn-outline-secondary">Найти заметку</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { NavLink } from "react-router-dom";
interface OtherLink {
  title: string;
  link: string;
}
interface Props {
  title: string;
  image: string;
  other?: OtherLink[];
}
//images/about/cacau13.JPG
const PageHeader = ({ title, image, other }: Props) => {
  return (
    <div
      className="page-title-area"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="page-title-content">
              <h2>{title}</h2>
              <ul>
                <li>
                  <NavLink to="/">
                    <a>Início</a>
                  </NavLink>
                </li>
                {other?.map((o) => (
                  <li>
                    <NavLink to={o.link}>{o.title}</NavLink>
                  </li>
                ))}
                <li>{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

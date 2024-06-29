import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { cities } from "../cz-cities";
import { CityTable } from "../components/CityTable";

document.querySelector("#root").innerHTML = render(
  <div className="table-container">
    <CityTable cities={cities} />
  </div>
);

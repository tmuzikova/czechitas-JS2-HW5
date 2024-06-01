import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { City } from "../components/City";
import "bootstrap/dist/css/bootstrap.min.css";
import { cities } from "../cz-cities";
import { ImgModal } from "../components/ImgModal";

document.querySelector("#root").innerHTML = render(
  <div className="table-container">
    <table className="table table-hover">
      <thead className="table-secondary">
        <tr>
          <th>Město</th>
          <th>Okres</th>
          <th>Počet obyvatel</th>
          <th>Rozloha</th>
          <th>Fotka</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city) => (
          <City
            key={city.name}
            name={city.name}
            district={city.district}
            population={city.population}
            area={city.area}
            img={city.photo}
          />
        ))}
      </tbody>
    </table>
    <ImgModal />
  </div>
);

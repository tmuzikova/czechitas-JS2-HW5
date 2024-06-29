import { CityRow } from "./CityRow";

export const CityTable = ({ cities }) => {
  return (
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
          <CityRow
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
  );
};

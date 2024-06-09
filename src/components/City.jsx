export const City = ({ name, population, area, district, img }) => {
  const formattedPopulation = population.toLocaleString("cs-CZ");
  const formattedArea = Math.round(area);

  return (
    <tr>
      <td className="h6">{name}</td>
      <td>{district}</td>
      <td>{formattedPopulation} obyvatel</td>
      <td>{formattedArea} km²</td>
      <td>
        <img src={img} alt={name} />
      </td>
    </tr>
  );
};

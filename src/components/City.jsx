export const City = ({ name, population, area, district, img }) => {
  const handleImageClick = () => {
    const modalImage = document.getElementById("modalImage");
    modalImage.src = img;
    const photoModal = new bootstrap.Modal(
      document.getElementById("photoModal")
    );
    photoModal.show();
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{district}</td>
      <td>{population} obyvatel</td>
      <td>{area} km²</td>
      <td>
        <img
          src={img}
          alt={name}
          className="img-thumbnail"
          style={{ cursor: "pointer" }}
          onClick={handleImageClick}
        />
      </td>
    </tr>
  );
};

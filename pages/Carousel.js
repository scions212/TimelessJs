import Image from "next/image";
import image1 from "../../public/imagenes/fibra-oscura.jpg";
import image3 from "../../public/imagenes/client.jpg";
import image2 from "../../public/imagenes/firewall2.jpg";

function Carousel() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src={image1} alt="firewall" layout="fill" />
        </div>

        <div className="carousel-item">
          <Image src={image2} alt="codigo" layout="fill" />
        </div>

        <div className="carousel-item">
          <Image src={image3} alt="client" layout="fill" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;

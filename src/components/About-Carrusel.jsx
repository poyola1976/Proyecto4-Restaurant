import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block  my-auto mx-auto"
          src="../../public/img/platos2/plato2.jpg"
          alt="First slide"
          width="100%"
          height="400px"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30 my-auto mx-auto"
          src="../../public/img/platos2/plato3.jpg"
          alt="Second slide"
          width="480px"
          height="340px"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30 my-auto mx-auto"
          src="../../public/img/platos2/plato4.jpg"
          alt="Third slide"
          width="480px"
          height="340px"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30 my-auto mx-auto"
          src="../../public/img/platos2/plato5.jpg"
          alt="Third slide"
          width="480px"
          height="340px"
          
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30 my-auto mx-auto"
          src="../../public/img/platos/gourmet-spaghetti-beautifully-arranged-on-a-white-plate-free-photo.jpg"
          alt="Third slide"
          width="340px"
          height="340px"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30 my-auto mx-auto"
          src="../../public/img/platos/Imagen-conejo-unab_lista.jpg"
          alt="Third slide"
          width="340px"
          height="340px"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30 my-auto mx-auto"
          src="../../public/img/platos/pasta-con-tomate1-935x1024.jpg"
          alt="Third slide"
          width="340px"
          height="340px"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
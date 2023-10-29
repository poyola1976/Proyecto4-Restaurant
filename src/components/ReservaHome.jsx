import Button from "react-bootstrap/esm/Button"
import Container from "react-bootstrap/esm/Container"
import Mapa from "./Mapa"


const ReservaHome = () => {
  return (
    <section id="reserva">
        <div id="mapaReserva">
            <Mapa />
        </div>
        <div id="aqui">
            <h1>RESERVA AQUÍ</h1>
            <Button variant="dark" >RESERVA MESA</Button>{' '}
        </div>
    </section>
  )
}

export default ReservaHome
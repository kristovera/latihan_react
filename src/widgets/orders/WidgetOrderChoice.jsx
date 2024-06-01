import axios from "axios";
import { useState } from "react"
import { Button, Card, Modal, Table } from "react-bootstrap";
import { FaArrowAltCircleDown, FaCartArrowDown } from "react-icons/fa";
import useFormatter from "../../hooks/useFormat";

const WidgetOrderChoice = ({ callback }) => {
  const [show, setShow] = useState(false);
  const formatter = useFormatter()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [orders, setOrders] = useState([]);

  const onGetOrders = () => {
    axios.get(`${import.meta.env.VITE_BASE_LAUNDRY}/orders?status=${import.meta.env.VITE_STATUS_HOLD}`)
      .then((response) => {
        setOrders(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} size="sm">
        <FaCartArrowDown /> Hold Orders
      </Button>

      <Modal onShow={onGetOrders} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hold Orders</Modal.Title>
        </Modal.Header>
        <Table responsive borderless>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            { orders.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.customerName}</td>
                <td>{value.customerPhone}</td>
                <td>{value.customerAddress}</td>
                <td>
                  <Button size="sm" onClick={() => {
                    callback(value);
                    handleClose();
                  }}>
                    <FaArrowAltCircleDown /> Pilih
                  </Button>
                </td>
              </tr>
            )) }
          </tbody>
        </Table>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default WidgetOrderChoice;
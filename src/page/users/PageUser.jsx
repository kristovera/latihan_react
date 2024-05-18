import axios from "axios";
import { useEffect, useState } from "react"
import { Badge, Button, Card, Col, Container, Placeholder, Row, Table } from "react-bootstrap";

const PageUser = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  
  const onGetUsers = () => {
    setIsLoading(true);
    axios.get(`https://fakestoreapi.com/users`)
      .then((response) => {
        setUsers(response.data);
      }).catch((error) => {
        alert(`Error ${error}`);
      }).finally(() => {
        setIsLoading(false);
      })
  }

  const onGetUser = (value) => {
    setUser(value);
  }
  

  useEffect(() => {
    onGetUsers()
  }, []);

  return (
    <>
       <Container className="mt-4">
        <Row className="mb-4">
            <h4>Daftar User</h4>
        </Row>
        <Row>
          <Col>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Username</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {isLoading && (
                  <tr>
                    <td>
                      <Placeholder xs={6} />
                    </td>
                    <td>
                      <Placeholder xs={6} />
                    </td>
                    <td>
                      <Placeholder.Button xs={4} aria-hidden="true" />
                    </td>
                  </tr>
                )}
                {!isLoading && users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                 
                    <td>
                      <Button onClick={() => onGetUser(user)}>Detail</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          {user && (
            <Col md={4}>
              <Card className="d-flex flex-column align-items-center">
                <Card.Header className="w-100">
                  <Badge bg="secondary">{user.username}</Badge>
                </Card.Header>
                <Card.Img variant="top" className="w-50 object-fit-contain h-25 d-inline-block"  />
                <Card.Body>
                  <Card.Text >
                    Username : {user.username} <br />
                    Password : {user.password} <br />
                    First Name : {user.name.firstname} <br />
                    Last Name : {user.name.lastname} <br />
                    City: {user.address.city} <br />
                    Street: {user.address.street} <br />
                    Number : {user.address.number}<br />
                    Zipcode: {user.address.zipcode} <br />
                    Geolocation: {user.address.geolocation.lat}, {user.address.geolocation.long}, <br />
                    Phone: {user.phone} <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}

export default PageUser;
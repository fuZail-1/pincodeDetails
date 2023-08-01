import React from 'react'
import { Table } from "react-bootstrap";
const CityDetailTable = (props) => {
  return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>District</th>
              <th>State</th>
              <th>Country</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.pincodedetails.District}</td>
              <td>{props.pincodedetails.State}</td>
              <td>{props.pincodedetails.Country}</td>
              <td>{props.pincodedetails.Name}</td>
            </tr>
          </tbody>
        </Table>
     )
}

export default CityDetailTable
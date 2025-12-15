import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

function Datatable({ data = [], type }) {
  const columns = data.length ? Object.keys(data[0]) : [];

  return (
    <div>
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            {columns.map((colName) => (
              <th key={colName}>{colName.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              {type === 'cars' ? (
                <td>{car.registrationExpiry ? new Date(car.registrationExpiry).toLocaleDateString() : ''}</td>
              ) : (
                <td>
                  <Badge bg={car.isExpired ? 'danger' : 'success'}>
                    {car.isExpired ? 'Expired' : 'Valid'}
                  </Badge>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Datatable;

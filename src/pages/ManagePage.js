import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import './styles/ManagePage.css';

const ManagePage = () => {
  const { user } = useContext(AuthContext);
  const [tables, setTables] = useState([]);
  const [reservations, setReservations] = useState([]);

  const addTable = () => {
    setTables([...tables, { id: tables.length + 1, seats: 4, pmr: false, children: false }]);
  };

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <div className="manage-page">
      <h1>Manage Page</h1>
      {user.role === 'directeur' && (
        <>
          <h2>Manage Tables</h2>
          <button onClick={addTable}>Add Table</button>
          <div className="table-layout">
            {tables.map(table => (
              <div key={table.id} className="table">
                Table {table.id} - Seats: {table.seats}
              </div>
            ))}
          </div>
        </>
      )}
      <h2>Manage Reservations</h2>
      <button onClick={() => addReservation({ name: 'John Doe', seats: 2, time: '19:00', phone: '123456789' })}>Add Reservation</button>
      <div className="reservations">
        {reservations.map((reservation, index) => (
          <div key={index} className="reservation">
            {reservation.name} - {reservation.seats} seats at {reservation.time}, {reservation.phone}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePage;

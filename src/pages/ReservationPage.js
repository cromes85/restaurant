import React, { useState } from 'react';
import Toolbar from '../components/Toolbars/Toolbar';
import './styles/ReservationPage.css';

const ReservationPage = () => {
  const initialTables = [
    { id: 1, reserved: false },
    { id: 2, reserved: true },
    { id: 3, reserved: false },
    { id: 4, reserved: true },
  ];

  const [tables, setTables] = useState(initialTables);

  const toggleReservation = (id) => {
    setTables(tables.map(table => 
      table.id === id ? { ...table, reserved: !table.reserved } : table
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Table Reservation</h1>
      </header>
      <main>
        <section className="table-layout">
          {tables.map(table => (
            <div
              key={table.id}
              className={`table ${table.reserved ? 'reserved' : ''}`}
              onClick={() => toggleReservation(table.id)}
            >
              Table {table.id}
            </div>
          ))}
        </section>
        <Toolbar buttonText="Back to Menu" link="/" />
      </main>
    </div>
  );
};

export default ReservationPage;

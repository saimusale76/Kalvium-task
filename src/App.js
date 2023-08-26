import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './components/Header';
import AttendanceForm from './components/AttendanceForm';
import AttendanceRecords from './components/AttendanceRec';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <h1>Attendance System</h1>
        <section id="attendance-form">
          <AttendanceForm />
        </section>
        <section id="attendance-records">
          <AttendanceRecords />
        </section>
      </main>
    </div>
  );
}

export default App;

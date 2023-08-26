import React, {useEffect, useState} from 'react'
import db from '../firebase';
import { className } from 'postcss-selector-parser';
import { TableData } from './TableData';

export default function AttendanceRecords() {

    const [studAttendance, setStudAttendance] = useState([]);

    useEffect(() => {
      fetch('https://attendance-kalvium-default-rtdb.firebaseio.com/attendanceDb.json')
      .then(res => res.json())
      .then(json => setStudAttendance(Object.values(json)));
    }, []);

    return (
      <table className='thead'>
        <thead>
          <tr>
            <th className='table'>Student Name</th>
            <th className='table'>Date</th>
            <th className='table'>Attended</th>
          </tr>
        </thead>
        <tbody>
          {studAttendance.map((attendance) => (
            <TableData
            student = {attendance.studName}
            date = {attendance.date}
            status = {attendance.attended === "on" ? 'Yes' : 'No'}
            />
          ))}
        </tbody>
      </table>
    );
  
  }
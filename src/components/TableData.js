import React from 'react'

export const TableData = ({student, date, status}) => {
  return (
        <tr>
            <td>{student}</td>
            <td>{date}</td>
            <td>{status == "on" ? 'Yes' : 'No'}</td>
        </tr>
  )
}

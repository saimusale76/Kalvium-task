import React, {useState} from 'react';
import firebase from 'firebase/app'

export default function AttendanceForm() {

    const [userData, setUserData] = useState({
        studName: "",
        date: "",
        attended: false,
    });
  
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      // TODO: Add attendance record to database
      const { studName, date, attended } = userData;

       if(studName && date && attended){
        const res = fetch(
            "https://attendance-kalvium-default-rtdb.firebaseio.com/attendanceDb.json",
            {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  studName,
                  date,
                  attended,
                }),
            }
        );
        console.log(userData.name);

      if(res){
        setUserData({
            studName: "",
            date: "",
            attended: false,
          });
          alert("Attendance Marked");
      }
    //   else{
    //     alert("please fill the data");
    //   }
    }
     else{
        alert("please fill the data");
     }
    };
  
    return (
      <form method='POST' className='form-setup'>
        <label className='form-design'>
          Student Name:
          <input 
           type="text" 
           value={userData.studName} 
           onChange={postUserData}
           name="studName" 
           className='form-name'
           />
        </label>
        <label className='form-design'>
          Date:
          <input type="date" 
           value={userData.date}
           onChange={postUserData}
           name="date" 
           className='form-name'
           />
        </label>
        <label className='form-design'>
          Attended:
          <input 
           type="checkbox" 
           checked={userData.attended} 
           onChange={postUserData}
           name='attended' 
           className='form-name'
          />
        </label>
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    );
  
  }
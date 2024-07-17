import { useEffect } from "react";
import { useState } from "react";


const FetchUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((result) => result.json())
          .then((data) => {
            console.log("users", data)
            setUsers(data)
          })
          .catch(error => console.error('Error fetching user data:', error));
      }, []);

    return (
        <div style={{ textAlign: 'center' }}>
      <h1 style={{backgroundColor:"red"}}>User  Details Fetch  Table</h1>
      <table style={{ borderCollapse: 'collapse', margin: 'auto', width: '60%', border: '1px solid #ddd' }}>
        <thead>
          <tr style={{ border: '1px solid #ddd', backgroundColor: 'black', color: 'white' }}>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length &&
            users.map((item,index) => (
              <tr key={index} style={{ border: '1px solid #ddd', backgroundColor: 'gray', color: 'white' }}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    );
};

export default FetchUsers;
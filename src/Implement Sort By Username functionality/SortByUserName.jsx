import { useEffect, useState } from "react";


const SortByUserName = () => {

    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsersData(data);
            })
            .catch((error) => {
                throw error;
            });
    }, []);

    const handleAscendingSort = () => {
        const users = [...usersData].sort((a, b) =>
            a.username.localeCompare(b.username)
        );
        setUsersData(users);
    };

    const handleDescendingSort = () => {
        const users = [...usersData].sort((a, b) =>
            b.username.localeCompare(a.username)
        );
        setUsersData(users);
    };
    return (
        <div className="App">
            <h1 style={{backgroundColor:"blue", color:"white"}}>Example of short by username</h1>

          <div >
          <button  onClick={() => handleAscendingSort()} style={{marginRight:"5px", backgroundColor:"blue", color:"white"}}>
                Short by Ascending
            </button>
            <button onClick={() => handleDescendingSort()} style={{marginRight:"5px", backgroundColor:"navy", color:"white"}}>
                Short by Descending
            </button>

          </div>
            {usersData &&
                usersData.map((user) => (
                    <div key={user.id}>
                        <p>{user.username}</p>
                    </div>
                ))}
        </div>
    );
};

export default SortByUserName;
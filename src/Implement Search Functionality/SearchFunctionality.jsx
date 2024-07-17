import { useEffect, useState } from "react";

const SearchFunctionality = () => {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') // Fetching user details from the given endpoint
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1 style={{backgroundColor:"green"}}>Implement Search Functionality</h1>
            <input
                type="text"
                placeholder="Search by username"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchFunctionality;
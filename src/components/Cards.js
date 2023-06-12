import React, { useEffect, useState } from 'react'
import '../components/Cards.css'
import Users from './Users'
import InputSearch from './InputSearch'


const Cards = () => {
    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        if (searchTerm === '') {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => setUsers(data))
        } else {
            const filteredUsers = users.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setUsers(filteredUsers)
        }
    }, [searchTerm, users])

    const onInputChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="container">

            <InputSearch
                onChange={onInputChange}
                searchTerm={searchTerm}
            />

            <div className="card-container">
                {users.map((user) => (
                    <Users
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </div>
    )
}

export default Cards;

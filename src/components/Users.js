import React from 'react'

const Users = ({user}) => {
    return (
        <div key={user.id} className="card">
            <img
                className="user-img"
                src={`https://robohash.org/${user.email}`}
                alt="Robohash"
                style={{ width: "50%" }}
            />
            <div className="info">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

export default Users

import React from 'react'

const Users = ({user}) => {
    return (
        <div key={user.id} className="card">
            <img
                className="user-img"
                src={`https://avatars.dicebear.com/api/adventurer/co.uk.${user.email}.svg`}
                alt="avatar"
                style={{ width: "100%" }}
            />
            <div className="info">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

export default Users

import React from 'react'

const InputSearch = ({onChange, searchTerm}) => {
    return (
        <div className="flexbox">
            <div className="search">
                <h1>Quick user connections!</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Search . . ."
                        required
                        value={searchTerm}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default InputSearch
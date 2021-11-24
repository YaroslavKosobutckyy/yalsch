import React, { useEffect } from 'react';
import { useState } from 'react';
import FreeComponent from '../FreeComponent';

const Card = ({ id, firstName, lastName, dob, users }) => {

    const [cartUsers, setCartUser] = useState([]);
    const [cartUsersAll, setCartUserAll] = useState([]);

    const onChangeValue = (event) => {
        addToCart(lastName, firstName, dob)
    }

    const addToCart = (user1, user2, user3) => {
        setCartUser([...cartUsers, { user1, user2, user3 }]);
    };

    const addAllUsers = (user) => {
        setCartUserAll([...cartUsersAll, { user }])
    }

    useEffect(() => {
        if (cartUsers.length) { addAllUsers(cartUsers) }
    }, []);

    return (
        <>
            <div className='data_user'>
                <p> firstName = {firstName} </p>
                <p> lastName = {lastName}</p>
            </div>
            <div onChange={onChangeValue}>
                <input type="radio" value="active" name="active" />active
                <input type="radio" value="not active" name="not active" />not active
            </div>

            {(cartUsers.length) && <FreeComponent cardusers={cartUsers} />}

        </>
    );
}

export default Card;





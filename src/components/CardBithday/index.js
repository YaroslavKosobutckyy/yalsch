import React from 'react';

const CardBithday = (cardusers) => {
    const userB = cardusers.cardusers.cardusers;
    return (
        <>
            {(userB) && <div className='data_user_list_bithday'>
                <p> {userB[0].user1} {userB[0].user2} was born in {userB[0].user3} </p>
            </div>}
            {/* {
                ccc.map((user, i) => (
                    <div className='data_user_list_bithday'>
                        <p> {cardusers.cardusers[0].user1} {cardusers.cardusers[0].user2} </p>
                    </div>))
            } */}
        </>
    );
}
export default CardBithday;
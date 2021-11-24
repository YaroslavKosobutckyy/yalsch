import React from 'react';
import Card from '../card';

const CardList = ({ dataUser }) => {
    const users = dataUser.data;

    const SortByName = () => {
        users.sort(function (a, b) {
            if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
                return -1;
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
                return 1;
            return 0;
        });
    }

    const abetka = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'E', 'X', 'Z'];

    return (
        <div>
            {SortByName(users)}

            {
                abetka.map((letter, j) => {
                    return (
                        <>
                            <p>{letter}</p>

                            {
                                users.filter(user => user.firstName[0] === letter)
                                    .map((user, i) => {
                                        return (
                                            <>
                                                <Card
                                                    users={users}
                                                    id={users[i].id}
                                                    firstName={users[i].firstName}
                                                    lastName={users[i].lastName}
                                                    dob={users[i].dob}
                                                />

                                            </>
                                        );
                                    }
                                    )
                            }
                        </>
                    )
                })
            }
        </div>
    );
}

export default CardList;

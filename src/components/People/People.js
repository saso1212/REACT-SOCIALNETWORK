import React from 'react';
import Button from '../../UI/Button/Button';

import './People.css';

const people = props => props.users.map(user =>
    <div className="People" key={user._id}>
        <h4>{[user.name, user.lastname].join(' ')}</h4>
        <Button type="button" clicked={() => props.friendClicked(user._id)} title="Add Friend" />
    </div>
);

export default people;
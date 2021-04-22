import React from 'react'
import { Card} from '../UI/Card';
// import ErrorModal from '../UI/ErrorModal';
import classes from './UsersList.module.css';

export const UsersList = (props) => {
    return (
        <div>
        {/* <ErrorModal /> */}
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
        </div>
    )
        
      
                
}

export default UsersList

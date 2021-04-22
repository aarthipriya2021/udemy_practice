import React from 'react'
import { Card} from '../UI/Card';
// import ErrorModal from '../UI/ErrorModal';
import classes from './UsersList.module.css';
import { UserListItem} from './UserListItem'


export const UsersList = (props) => {
    return (
        <div>
        {/* <ErrorModal /> */}
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <UserListItem 
                    key={user.id}
                    id={user.id}
                    onDelete={props.onDeleteItem}
                    >
                        {user.name} ({user.age} years old)
                    </UserListItem>
                
                ))}
            </ul>
        </Card>
        </div>
    )
        
      
                
}

export default UsersList

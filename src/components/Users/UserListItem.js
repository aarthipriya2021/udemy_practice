import React from 'react';

import './UserListItem.css';

export const UserListItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="user-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default UserListItem;

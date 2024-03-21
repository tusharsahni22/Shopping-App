import React from 'react';
import Avatar from 'react-avatar';

const MyComponent = (props) => {
  return <Avatar className=' sb-avatar__text' name={props.name} size="100" round={true} />;
};

export default MyComponent;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem('userName');
  React.useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  });

  return <div>Some text profile</div>;
};

export default Profile;

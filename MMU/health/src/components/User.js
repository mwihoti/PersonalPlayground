import React from 'react';
import SignIn from './sign/signIn'
import SignPage from './sign/auth';
import { TabLaundry } from './Header';

function User() {
  return (
    <div>
      <TabLaundry />
      <SignPage />
    </div>
  )
}

export default User
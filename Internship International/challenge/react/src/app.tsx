import { useState } from 'react';
import { CreateUserForm } from './create-user-form';

const API_URL = 'https://api.challenge.hennge.com/password-validation-challenge-api/001'; 

function App() {
  const [userWasCreated, setUserWasCreated] = useState(false);
  if (userWasCreated) {
    return <p>User was successfully created!</p>;
  }

  return <CreateUserForm setUserWasCreated={setUserWasCreated} />;
}

export default App;

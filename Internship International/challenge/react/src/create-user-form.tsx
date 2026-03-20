import type { CSSProperties, Dispatch, SetStateAction } from 'react';

interface CreateUserFormProps {
  setUserWasCreated: Dispatch<SetStateAction<boolean>>;
}

function CreateUserForm({}: CreateUserFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target); // it will return the form 
    // Create FormData object from the form element
    const formData = new FormData(event?.target);
    console.log('Username:', formData.get('username'));
    console.log('Password:', formData.get('password'));
  };
  return (
    <div style={formWrapper}>
      <form style={form}
       onSubmit={handleSubmit }
      >
        {/* make sure the username and password are submitted */}
        {/* make sure the inputs have the accessible names of their labels */}
          <label style={formLabel} htmlFor="username" className='name'>Username</label>
          <input style={formInput} id="username" name="username" type="text" required />

          <label style={formLabel} htmlFor="password" className='password'>Password</label>
          <input style={formInput} id="password" name="password" type="password" required />

        <button style={formButton} type='submit'>Create User</button>
      </form>
    </div>
  );
}

export { CreateUserForm };

const formWrapper: CSSProperties = {
  maxWidth: '500px',
  width: '80%',
  backgroundColor: '#efeef5',
  padding: '24px',
  borderRadius: '8px',
};

const form: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const formLabel: CSSProperties = {
  fontWeight: 700,
};

const formInput: CSSProperties = {
  outline: 'none',
  padding: '8px 16px',
  height: '40px',
  fontSize: '14px',
  backgroundColor: '#f8f7fa',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: '4px',
};

const formButton: CSSProperties = {
  outline: 'none',
  borderRadius: '4px',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  backgroundColor: '#7135d2',
  color: 'white',
  fontSize: '16px',
  fontWeight: 500,
  height: '40px',
  padding: '0 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '8px',
  alignSelf: 'flex-end',
  cursor: 'pointer',
};

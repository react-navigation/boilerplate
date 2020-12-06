import * as React from 'react';

export type AuthContextType = {
  signIn: (data: { username: string; password: string }) => void;
  signUp: (data: { username: string; password: string }) => void;
  signOut: () => void;
};

const NO_CONTEXT = () => {
  throw new Error('AuthContext not found');
};

const AuthContext = React.createContext<AuthContextType>({
  signIn: NO_CONTEXT,
  signUp: NO_CONTEXT,
  signOut: NO_CONTEXT,
});

export default AuthContext;

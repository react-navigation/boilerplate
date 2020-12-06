import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import AuthContext from '../AuthContext';
import Background from '../shared/Background';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn } = React.useContext(AuthContext);
  const { colors } = useTheme();

  return (
    <Background style={styles.content}>
      <TextInput
        placeholder="Username"
        style={[
          styles.input,
          { backgroundColor: colors.card, color: colors.text },
        ]}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[
          styles.input,
          { backgroundColor: colors.card, color: colors.text },
        ]}
        onChangeText={setPassword}
      />
      <Button
        title="Sign in"
        onPress={() => {
          signIn({ username, password });
        }}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    margin: 8,
    padding: 10,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
});

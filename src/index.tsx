import * as React from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  LinkingOptions,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext, { AuthContextType } from './AuthContext';
import Home from './screens/Home';
import PostDetails from './screens/PostDetails';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import Loading from './screens/Loading';
import { RootStackParamList } from './types';

type State = {
  userToken: string | null;
  isLoading: boolean;
};

type Action =
  | { type: 'RESTORE_TOKEN'; token: string | null }
  | { type: 'SIGN_IN'; token: string }
  | { type: 'SIGN_OUT' };

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Home: {
        screens: {
          Feed: {
            path: '',
            screens: {
              Popular: 'popular',
              Latest: 'latest',
            },
          },
          Account: 'account',
        },
      },
      PostDetails: 'post/:id',
      NotFound: '*',
    },
  },
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState: State, action: Action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken = null;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    (): AuthContextType => ({
      signIn: async () => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signUp: async () => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
    }),
    []
  );

  const colorScheme = useColorScheme();

  if (state.isLoading) {
    return <Loading />;
  }

  return (
    <AppearanceProvider>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
          linking={linking}
          fallback={<Loading />}
        >
          <Stack.Navigator>
            {state.userToken == null ? (
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Sign in' }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="PostDetails" component={PostDetails} />
                <Stack.Screen name="NotFound" component={NotFound} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </AppearanceProvider>
  );
}

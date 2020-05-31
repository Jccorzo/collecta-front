import React, {createContext} from 'react';
import io from 'socket.io-client';

export const AuthContext = createContext();

const socket = io('http://192.168.43.198:3000/socket');

export default function AuthProvider(props){
    
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
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
                isSignout: false,
                userToken: action.token,
                userInfo: action.userInfo
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                userToken: null,
              };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          userToken: null,
        }
      );
    
    
      React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
          let userToken;

          try {
            userToken = await AsyncStorage.getItem('userToken');
            navigation.navigate('Main')
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
        () => ({
          signIn: async (username, password) => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            var raw = JSON.stringify({"email":username,"password":password});
            
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
            let response = await fetch("http://localhost:3000/login",requestOptions);
            let user = await response.json();
            console.log(user);
            socket.emit('login',user)
            console.log(username,password);
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token', userInfo:user });
          },
          signOut: () => dispatch({ type: 'SIGN_OUT' }),
          signUp: async (name, password, navigation) => {
            console.log(name,password);
            navigation.navigate('ConfirmCode');
            
          },
          confirmSignUp: async code => {
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' }); 
          }
        }),
        []
      );
         
      return(
          <AuthContext.Provider value={{state, authContext, socket}}>
            {props.children}
          </AuthContext.Provider>
      );
}
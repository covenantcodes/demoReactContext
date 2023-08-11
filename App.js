import { UserProvider } from './Context/UserContext';
import StackNavigator from './navigator/StackNavigator';

const App =()=> {
  return (
    <UserProvider>
      <StackNavigator />
    </UserProvider>
  );
}

export default App;
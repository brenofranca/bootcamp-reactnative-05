import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.configure({ name: 'React Native App 4' })
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

console.tron = reactotron;

reactotron.clear();

export default reactotron;

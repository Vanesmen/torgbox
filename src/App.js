import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from "./redux/redux-store";
import ContentContainer from './components/Content/ContentContainer';

function App() {
  return (
    <Provider store={store}>
      <ContentContainer />
    </Provider >
  );
}

export default App;

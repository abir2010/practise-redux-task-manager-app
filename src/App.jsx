import Display from "./components/Display";
import Form from "./components/Form";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Form />
            <Display />
        </Provider>
    );
}

export default App;

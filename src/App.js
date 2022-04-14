import './App.css';
import Grid from './Grid';

const testFunc = cell => {
    return cell.d % 43 == 0 ? "black" : "white";
}

export default function App() {
    return (<div><p>Grid:</p><Grid colorFunction={testFunc} /></div>);
}

import './App.css';
import ReactComp from './components/ReactComp';
import VueComp from './components/VueComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App Container</h1>
        <div className='app-cube'>React App Container组件</div>
        <hr/>
        <ReactComp/>
        <hr/>
        <VueComp/>
      </header>
    </div>
  );
}

export default App;

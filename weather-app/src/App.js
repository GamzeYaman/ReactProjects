import './App.css';
import Contents from './components/Contents';
import { WeatherProvider } from './context/WeatherContext';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <WeatherProvider>
        <Contents/>
      </WeatherProvider>
    </div>
  );
}

export default App;

import  HomeScreen  from './screens/HomeScreen/HomeScreen.tsx';
import video from './assets/concert.mp4';
import './App.css'

function App() {
  return (
    <div>
        <video className='video' autoPlay loop muted id='video'>
        <source src={video} type ='video/mp4' />
      </video>
      <HomeScreen />
     </div>
  );
}

export default App;

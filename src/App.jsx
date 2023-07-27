import NavBar from './components/NavBar';

import './styles/index.css';
import './styles/features.css';
import BannerAction from './components/BannerAction';
import News from './components/News';


const App = () => {
 

  return (
    <>
      <NavBar/>
      <BannerAction></BannerAction>
      <News></News>
    </>
  );
}

export default App

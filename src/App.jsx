import NavBar from './components/NavBar';

import './styles/index.css';
import './styles/features.css';
import BannerCallToAction from './components/BannerCallToAction';
import News from './components/News';


const App = () => {
 

  return (
    <>
      <NavBar/>
      <BannerCallToAction></BannerCallToAction>
      <News></News>
    </>
  );
}

export default App

import React, {useState , useEffect} from 'react'
import banners from '../data/CallToAction.json';
import BannerAction from './BannerAction';


const renderedBanners = banners.map(banner=>{
  return (<BannerAction 
    key={banner.key} title={banner.title}
  subtitle={banner.subtitle}></BannerAction>)
});

const BannerCallToAction = () => {

  /**
   * 
   *   const [contentId, setContentId] = useState(1);

  setTimeout(()=>{
    setContentId(Math.floor(Math.random()*(2-0)+0));
    console.log("Mostrando el banner",contentId);
  },5000);

Note que de esta forma hay un leak de memoria importante, se opto por
cambiar el metodo por useEffect()

   * 
   */
 
    const [count, setCount] = useState(1);
  
    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
              setCount(count + 1);      
        }, 5000);
  
        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);
  
 
  return (
    <div>
      {count}
       {renderedBanners[Math.floor(Math.random()*(2-0)+0)]}}
    </div>
  )
}

export default BannerCallToAction


import { CarouselSlider } from "./components/landingPageComponents/CarouselSlider";
import { NavigationBarLogo } from "./components/landingPageComponents/navigationBarLogo";

import { SectionMarket } from "./components/landingPageComponents/SectionMarket";
// import VideoPlayer from './components/landingPageComponents/VideoPlayer';


export default function Home() {
  return (
   <>
   <NavigationBarLogo /> 
   <CarouselSlider />
 
   <SectionMarket />
   </>
  );
}

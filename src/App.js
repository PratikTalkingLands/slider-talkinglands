import logo from './logo.svg';
import './App.css';
import ReactCardSlider from './components/ReactCardSlider.tsx';
import React from 'react';

function App() {

  const slideClick = (slider) => {
    alert("You have clicked")
  }

  const slides = [
    {image: "https://picsum.photos/600/400", title: "This is a title", description: "This is a description", clickEvent:slideClick},
    {image: "https://picsum.photos/601/400", title: "This is a second title", description: "This is a second description", clickEvent:slideClick},
    {image: "https://picsum.photos/602/400", title: "This is a third title", description: "This is a third description", clickEvent:slideClick},
    {image: "https://picsum.photos/603/400", title: "This is a fouth title", description: "This is a fouth description", clickEvent:slideClick},
    {image: "https://picsum.photos/604/400", title: "This is a fifth title", description: "This is a fifth description", clickEvent:slideClick},
    {image: "https://picsum.photos/605/400", title: "This is a sixth title", description: "This is a sixth description", clickEvent:slideClick},
    {image: "https://picsum.photos/606/400", title: "This is a seventh title", description: "This is a seventh description", clickEvent:slideClick},
    {image: "https://picsum.photos/607/400", title: "This is a eighth title", description: "This is a eighth description", clickEvent:slideClick},
];
  return (
   <div id="body">
    <ReactCardSlider slides={slides}/>
   </div>
  );
}

export default App;

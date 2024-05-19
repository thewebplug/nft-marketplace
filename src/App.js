import { useEffect, useRef } from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const pathname = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.06,
      tablet: {
        breakpoint: 768,
      },
    });

    if (scroll) {
      scrollRef.current = scroll;
    } else {
      console.error('LocomotiveScroll instance could not be initialized.');
    }

    return () => {
      scroll.destroy(); // Clean up on unmount
    };
  }, [pathname]);
  return (
      <div data-scroll-container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
  );
}

export default App;

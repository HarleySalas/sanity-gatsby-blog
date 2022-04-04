import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;

// //usage

// function App() {
//     // You can use any @media property
//     const isDesktop = useMediaQuery('(min-width: 960px)');

//     return (
//       <div className="App">
//         {isDesktop ? <h1>Desktop</h1> : <h1>Mobile</h1>}
//         <Navbar isDesktop={isDesktop}/>
//       </div>
//     );
//   }

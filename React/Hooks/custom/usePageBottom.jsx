import {useState,useEffect} from "react";

// Translated to Modern JS with an arrow function
const usePageBottom = () => {
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
      // We need to check is the scroll position is in the bottom of the page
    function handleScroll() {
        //returns a boolean value indicating whether the scroll position is in the bottom of the page or not
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop 
        === document.documentElement.offsetHeight;
      setBottom(isBottom);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return bottom;
}

export default usePageBottom;

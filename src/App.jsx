import { useRef, useEffect } from 'react';
import ValLogo from './assets/ValLogo.png';
import Maps from './assets/Maps.png';
import LinkedList from './assets/LinkedList.png';
import Tree from './assets/Tree.png';
import SnapShowcase from './assets/snapLogo.jpg';
import SelectionSort from './assets/SelectionSort.png';
import InsertionSort from './assets/InsertionSort.png';
import './App.css';
import './Writing.css';

function App() {
  const carouselRef = useRef(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    carouselRef.current.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    isDown.current = false;
    carouselRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleWheel = (e) => {
    carouselRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    const container = carouselRef.current;
    let frame;

    const autoScroll = () => {
      if (!isDown.current) {
        container.scrollLeft += .6;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      frame = requestAnimationFrame(autoScroll);
    };

    frame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  const logos = [
    ValLogo,
    Maps,
    Tree,
    LinkedList,
    SnapShowcase,
    SelectionSort,
    InsertionSort,
  ];

  const projectLinks = [
  "https://github.com/JayOlivasCox/ValorantCharactersCatalog.github.io",
  "https://github.com/JayOlivasCox/Map-Implementation",
  "https://github.com/JayOlivasCox/In-Class_BST",
  "https://github.com/JayOlivasCox/Linked-Lists_In-Class",
  "https://github.com/Snap-Engineering-Academy-2024/RacialJustice",
  "https://github.com/JayOlivasCox/Selection-Sort",
  "https://github.com/JayOlivasCox/Insertion-Sort"
];

  const list = [
    "Valorant Catalog",
    "Hash Map",
    "Binary Search Tree",
    "Linked List",
    "Snap Showcase Project",
    "Selection Sort",
    "Insertion Sort"
  ];

  return (
    <div className="main-container">
      <div className="header">
        <a
          href="https://www.linkedin.com/in/jay-olivas-cox-031b66209/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="title">Jay Olivas Cox</span>
        </a>
        <p className="instructions">
          Click on names or project images to expand.
        </p>
      </div>

      <section className="projects-section">
        <p className="projects">Projects</p>

        <div
          className="carousel"
          ref={carouselRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="track">
            {[...logos, ...logos].map((logo, index) => (
              <a key={index} href={projectLinks[index % list.length]} draggable="false" target="_blank">
                <img
                  src={logo}
                  className="pics"
                  alt="Project logo"
                  draggable="false"

                />
                <p className="picDesc">
                  {list[index % list.length]}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

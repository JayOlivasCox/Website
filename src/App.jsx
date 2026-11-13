import { useEffect, useState } from 'react';
import jayHero from './assets/jay-hero.jpg';
import jaySquare from './assets/jay-square.jpg';
import salonBooksImg from './assets/salon-books.png';
import githubLogo from './assets/github.png';
import linkedinLogo from './assets/linkedin.png';
import snapLogo from './assets/snapLogo.jpg';
import valLogo from './assets/ValLogo.png';
import hashMapImg from './assets/Maps.png';
import treeImg from './assets/Tree.png';
import linkedListImg from './assets/LinkedList.png';
import selectionSortImg from './assets/SelectionSort.png';
import insertionSortImg from './assets/InsertionSort.png';

/* ---------- Edit your info here ---------- */

const GITHUB = 'https://github.com/JayOlivasCox';
const LINKEDIN = 'https://www.linkedin.com/in/jay-olivas-cox-031b66209/';

// Rotating text under "Hello, I'm Jay"
const ROLES = ['Backend Developer', 'CS Student', 'Java Programmer', 'C++ Programmer'];

const facts = [
  ['Name', 'Jay Olivas Cox'],
  ['School', 'Cal State Dominguez Hills'],
  ['Major', 'Computer Science'],
  ['Graduating', 'Spring 2027'],
  ['Focus', 'Backend development'],
  ['Languages', 'Java, C, C++, Python'],
];

const projects = [
  {
    name: 'Salon Books',
    description:
      'Bookkeeping app for salon stylists that tracks client income, tips, expenses, and booth rent, with reports and a Schedule C tax summary PDF. Team project; I built the backend.',
    tech: ['React Native', 'Spring Boot', 'Supabase'],
    image: salonBooksImg,
    href: 'https://github.com/JayOlivasCox/salon-books',
  },
  {
    name: 'Snap Showcase Project',
    description:
      'Team prototype of a Snapchat feature that highlights racial justice issues, built for the Snap Academies 2024 showcase.',
    tech: ['React Native', 'Expo'],
    image: snapLogo,
    href: 'https://github.com/Snap-Engineering-Academy-2024/RacialJustice',
  },
  {
    name: 'Valorant Catalog',
    description:
      'Website for browsing Valorant agents by role and viewing each one’s abilities, clips, and lore.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: valLogo,
    href: 'https://github.com/JayOlivasCox/ValorantCharactersCatalog.github.io',
  },
];

const classwork = [
  {
    name: 'Hash Map',
    description: 'Map implemented with a hash table for fast lookups, inserts, and deletes.',
    tech: ['C++'],
    image: hashMapImg,
    href: 'https://github.com/JayOlivasCox/Map-Implementation',
  },
  {
    name: 'Binary Search Tree',
    description: 'Word tree that stores words alphabetically and counts how often each one appears.',
    tech: ['C++'],
    image: treeImg,
    href: 'https://github.com/JayOlivasCox/In-Class_BST',
  },
  {
    name: 'Linked List',
    description: 'Doubly linked list that reads a text file and tracks the frequency of each letter.',
    tech: ['C++'],
    image: linkedListImg,
    href: 'https://github.com/JayOlivasCox/Linked-Lists_In-Class',
  },
  {
    name: 'Selection Sort',
    description: 'Sorts a file of basketball player records by height.',
    tech: ['C++'],
    image: selectionSortImg,
    href: 'https://github.com/JayOlivasCox/Selection-Sort',
  },
  {
    name: 'Insertion Sort',
    description: 'Sorts a file of basketball player records by weight.',
    tech: ['C++'],
    image: insertionSortImg,
    href: 'https://github.com/JayOlivasCox/Insertion-Sort',
  },
];

/* ---------- Components ---------- */

const projectCount = projects.length + classwork.length;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Types each word out, pauses, deletes it, then moves to the next.
function useTypewriter(words) {
  const [text, setText] = useState(() => (prefersReducedMotion() ? words[0] : ''));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let word = 0;
    let chars = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const full = words[word];
      if (!deleting) {
        chars += 1;
        setText(full.slice(0, chars));
        if (chars === full.length) {
          deleting = true;
          timer = setTimeout(tick, 1600);
          return;
        }
        timer = setTimeout(tick, 85);
      } else {
        chars -= 1;
        setText(full.slice(0, chars));
        if (chars === 0) {
          deleting = false;
          word = (word + 1) % words.length;
          timer = setTimeout(tick, 350);
          return;
        }
        timer = setTimeout(tick, 40);
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className={project.image ? 'thumb' : 'thumb thumb-empty'}>
        {project.image ? (
          <img src={project.image} alt="" loading="lazy" />
        ) : (
          <span>{project.name}</span>
        )}
      </div>
      <div className="card-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="chips" aria-label="Built with">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <a className="btn btn-sm" href={project.href} target="_blank" rel="noopener noreferrer">
          View code<span className="sr-only"> for {project.name}</span>
        </a>
      </div>
    </article>
  );
}

function App() {
  const typed = useTypewriter(ROLES);

  return (
    <>
      <div className="top" id="top">
        <header className="container nav">
          <a href="#top" className="brand">
            Jay<span>.</span>
          </a>
          <nav className="nav-links" aria-label="Main">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </nav>
        </header>

        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <h1>
                <span className="sr-only">Hello, I’m Jay, a backend developer</span>
                <span className="hello" aria-hidden="true">Hello, I’m Jay</span>
                <span className="typed" aria-hidden="true">
                  {typed}
                  <span className="caret" />
                </span>
              </h1>
              <p className="lead">
                Computer science student at Cal State Dominguez Hills, building backend systems in Java,
                C, C++, and Python.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#projects">
                  View my projects
                </a>
                <a className="text-link" href="#about">
                  More about me
                </a>
              </div>
            </div>

            <div className="hero-photo">
              <div className="photo-frame">
                <img src={jayHero} alt="Jay standing in front of a polar bear exhibit" />
              </div>
              <div className="badge badge-top">
                <span className="badge-dot" aria-hidden="true" />
                Class of 2027
              </div>
              <div className="badge badge-bottom">
                <strong>{projectCount}</strong>
                <span>projects on GitHub</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main>
        <section className="about" id="about">
          <div className="container about-grid">
            <div className="tiles">
              <div className="tile">
                <img src={jaySquare} alt="" loading="lazy" />
              </div>
              <div className="tile stat">
                <strong>{projectCount}</strong>
                <span>Projects</span>
              </div>
              <div className="tile stat">
                <strong>4</strong>
                <span>Languages</span>
              </div>
              <div className="tile stat stat-accent">
                <strong>2027</strong>
                <span>Graduating</span>
              </div>
            </div>

            <div>
              <p className="label">About me</p>
              <div className="about-heading">
                <h2>Who am I?</h2>
                <div className="socials">
                  <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className="gh" src={githubLogo} alt="GitHub" />
                  </a>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn" />
                  </a>
                </div>
              </div>
              <p className="bio">
                I’m a third-year computer science student at Cal State Dominguez Hills. I like working on
                the parts of an app people don’t see: APIs, databases, and the logic that keeps data
                correct. Most recently I built the Spring Boot backend for Salon Books, a bookkeeping app
                for salon stylists.
              </p>
              <dl className="facts">
                {facts.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="label">Portfolio</p>
                <h2>My projects</h2>
              </div>
              <a className="btn btn-outline" href={GITHUB} target="_blank" rel="noopener noreferrer">
                All repos on GitHub
              </a>
            </div>

            <div className="card-grid">
              {projects.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>

            <h3 className="subhead">Data structures and algorithms</h3>
            <div className="card-grid">
              {classwork.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <span>© {new Date().getFullYear()} Jay Olivas Cox</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}

export default App;

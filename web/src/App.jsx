import { useEffect, useMemo, useState } from "react";
import "./styles.css";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleText = useMemo(() => (theme === "dark" ? "Light mode" : "Dark mode"), [theme]);

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="logo">⚡</div>
          <div>
            <div className="title">Achi DevOps</div>
            <div className="subtitle">Simple React Website</div>
          </div>
        </div>

        <nav className="nav">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="navLink">
              {l.label}
            </a>
          ))}
        </nav>

        <button className="btn" onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}>
          {toggleText}
        </button>
      </header>

      <main className="main">
        <section id="home" className="card hero">
          <h1>Build. Ship. Repeat.</h1>
          <p>
            This is a lightweight React website with a theme switcher, designed to deploy using Docker + Nginx + CI/CD.
          </p>
          <div className="actions">
            <a className="btn primary" href="#contact">Contact</a>
            <a className="btn ghost" href="#about">Learn more</a>
          </div>
        </section>

        <section id="about" className="grid">
          <div className="card">
            <h2>What’s inside</h2>
            <ul className="list">
              <li>React (Vite) single-page website</li>
              <li>Light/Dark theme toggle (saved in browser)</li>
              <li>Docker multi-stage build + Nginx serving</li>
              <li>Ready for AWS EC2 deploy via GitHub Actions</li>
            </ul>
          </div>

          <div className="card">
            <h2>Why simple?</h2>
            <p>
              Simple UI = fewer bugs, faster deploy, easier CI/CD. Perfect for a DevOps practical project.
            </p>
            <div className="chips">
              <span className="chip">React</span>
              <span className="chip">Docker</span>
              <span className="chip">Nginx</span>
              <span className="chip">CI/CD</span>
            </div>
          </div>
        </section>

        <section id="contact" className="card">
          <h2>Contact</h2>
          <p>Drop your message (UI demo form):</p>

          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input className="input" placeholder="Your name" />
            <input className="input" placeholder="Email" type="email" />
            <textarea className="input" placeholder="Message" rows="4" />
            <button className="btn primary" type="submit">Send</button>
          </form>
        </section>

        <footer className="footer">© {new Date().getFullYear()} Achintha Bhanuka • Deployed with DevOps</footer>
      </main>
    </div>
  );
}

export default function DevModeAnnotations() {
  return (
    <aside className="dev-mode-panel" aria-hidden="true">
      <p className="dev-mode-panel-title">Components</p>
      <ul className="dev-mode-tree">
        <li>
          App <span className="dev-mode-file">page.jsx</span>
          <ul>
            <li>Navbar.jsx</li>
            <li>Hero.jsx</li>
            <li>About.jsx</li>
            <li>Education.jsx</li>
            <li>Experience.jsx</li>
            <li>Training.jsx</li>
            <li>Achievements.jsx</li>
            <li>Skills.jsx</li>
            <li>Projects.jsx</li>
            <li>Contact.jsx</li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

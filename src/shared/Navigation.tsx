import { Component, createSignal } from "solid-js";
import NavItem from "~/shared/NavItem";

const Navigation: Component<any> = () => {
  const [expanded, setExpanded] = createSignal(false);
  const toggleNav = () => setExpanded(!expanded());

  return (
    <div class="navigation" classList={{ expanded: expanded() }}>
      <NavItem type="home" link="#home"></NavItem>
      <NavItem type="about" link="#home"></NavItem>
      <NavItem type="projects" link="#home"></NavItem>
      <NavItem type="skills" link="#home"></NavItem>
      <NavItem type="contact" link="#home"></NavItem>
      <div class="navigation__accent d-none d-md-flex">
        <div></div>
      </div>
      <button class="fab bg-ocean-blue" onClick={toggleNav}></button>
    </div>
  );
};

export default Navigation;

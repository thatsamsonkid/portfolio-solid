import { Component, ComponentProps } from "solid-js";

const NavItem: Component<{ type: string; link: string }> = ({
  type,
  link,
}: any) => {
  return (
    <div class="nav-item">
      <a href={link}>
        <i class={`icon icon-${type}`}></i>
      </a>
    </div>
  );
};

export default NavItem;

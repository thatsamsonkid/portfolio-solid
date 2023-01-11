import { Component } from "solid-js";

const Tab: Component<any> = (props) => {
  return (
    <section class={`${props.class} flex flex-col md:flex-row gap-3`}>
      <div class={props.imgColClass}>{props.imgEl}</div>
      <div class={props.textColClass}>{props.children}</div>
    </section>
  );
};

export default Tab;

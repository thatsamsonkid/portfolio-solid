import { Component, Show } from "solid-js";

const TextImage: Component<any> = (props) => {
  return (
    <section class={`${props.class} flex flex-col md:flex-row gap-3`}>
      <div class={props.imgColClass}>
        <Show
          when={props.imgChild}
          fallback={<img src={props.img} alt={props.imgAlt} />}
        >
          {props.imgChild}
        </Show>
      </div>
      <div class={props.textColClass}>{props.children}</div>
    </section>
  );
};

export default TextImage;

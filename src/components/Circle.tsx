import { Component } from "solid-js";

const Circle: Component<any> = (props: any) => {
  return (
    <div class={`circle-display p-4 ${props.class}`}>
      <span class="circle-display__title sm-subtitle-2 mb-3">
        {props.title}
      </span>
      <span class="circle-display__description">
        <i>{props.children}</i>
      </span>
    </div>
  );
};

export default Circle;

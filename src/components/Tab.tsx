import { Component } from "solid-js";

const Tab: Component<any> = (props) => {
  const isActiveTab = props.activeTab === props.tabId ? true : false;
  const onClickHandler = (e: any) =>
    !props.disabled && props.onTabClick(props.tabId);

  return (
    <button
      role="tab"
      id={props.tabId}
      ref={props.ref}
      aria-controls={props.tabPanelId}
      aria-selected={isActiveTab}
      class={`${props.className}`}
      onClick={onClickHandler}
    >
      <span>{props.label}</span>
    </button>
  );
};

export default Tab;

import { children, Component, createSignal, createUniqueId } from "solid-js";
import { TabIdProps } from "./Tabs.types";

const Tabs: Component<any> = (props) => {
  const id = createUniqueId();
  const c = children(() => props.children);

  const [activeTab, setActiveTab] = createSignal('');
  const [ids, setIds] = createSignal<Array<TabIdProps>>([]);
  const [highlightOffset, setHighlightOffset] = createSignal(0);
  const [scrollPosition, setScrollPosition] = createSignal(0);
  const [maxScrollLeft, setMaxScrollLeft] = createSignal(0);
  const [isDragging, setIsDragging] = createSignal(false);
  const [showArrows, setShowArrows] = createSignal(true);
  const [arrowState, setArrowState] = createSignal({
    left: true,
    right: false,
  });

  // const draggableRef = useRef<HTMLDivElement>();
  // const tabRefs = useRef<HTMLElement[]>([]);

  return (
    <div class="tabs" id={`tabs-${id} `} class={props.tabClasses}>
      <div
        class={`${props.scrollable ? 'scrollable-area' : ''} ${
          props.alignment === 'center' ? 'justify-content-center' : ''
        }`}
      >
        {props.scrollable && showArrows() && scrollButton('left')}
        <div
          role="tablist"
          class={`${props.fullWidth? 'flex-grow-1' : ''}`}
        >
          <DraggableScroll
            draggableRef={props.draggableRef}
            onScroll={onTabListScroll}
            onDragEnd={OnDragEndHandler}
          >
            {children.map((child: any, index: number) => {
              const { label, class = '' } = child.props;
              const newProps = {
                class: `${props.fullWidth? 'flex-grow-1' : ''} ${class}`,
                id: tabIds[index].tabId,
                ref: (ref: any) => pushTabRef(ref, index),
                activeTab: { activeTab },
                key: tabIds[index].tabId,
                label: label,
                onTabClick: onTabSelection,
                ...tabIds[index],
              };
              return cloneElement(child, { ...newProps });
            })}
            <div class="tab__highlight" leftOffset={highlightOffset} />
          </DraggableScroll>
        </div>
        {props.scrollable && showArrows && scrollButton('right')}
      </div>
      {children.map((child: any, index: number) => {
        return (
          <div
            tabIndex={0}
            role="tabpanel"
            key={tabIds[index].tabPanelId}
            id={tabIds[index].tabPanelId}
            aria-labelledby={tabIds[index].tabId}
            class={`${activeTab !== tabIds[index].tabId ? 'hidden' : ''}`}
          >
            {child.props.children}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;

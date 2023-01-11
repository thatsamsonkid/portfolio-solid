import { onMount, createEffect, createSignal } from "solid-js";
import { WindowEventListener } from "@solid-primitives/event-listener";

const Header = () => {
  let headerEl: any;
  let headerOffset = 0;
  const [scrollPos, setScrollPos] = createSignal(0);
  const [elevated, setElevated] = createSignal("");

  onMount(() => {
    headerOffset = headerEl && headerEl.offsetTop > 0 ? headerEl.offsetTop : 0;
  });

  createEffect(() => {
    scrollPos() > headerOffset ? setElevated("elevated") : setElevated("");
  });

  return (
    <header
      ref={headerEl}
      class={`header bg-transparent py-3 px-4 ${elevated()}`}
    >
      <WindowEventListener
        onscroll={(e: any) =>
          setScrollPos(e?.target?.scrollingElement?.scrollTop)
        }
      />
      <div class="flex max-w-[1200px] justify-end mx-auto">
        <div class="site-logo ms-auto position-relative">
          <img src="/images/SM-LOGO.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;

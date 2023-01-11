import {
  children,
  createEffect,
  createSignal,
  createUniqueId,
  onMount,
  Show,
} from "solid-js";
import { classnames } from "~/utils/component-utils";

const Field = (props: any) => {
  const [isFocused, setFocus] = createSignal(false);
  const [isFilled, setFilled] = createSignal(false);
  const [fieldClasses, setFieldClasses] = createSignal("");
  const [fieldEl, setFieldEl] = createSignal(null);
  const id = createUniqueId();
  const c = children(() => props.children);
  const determineFieldClasses = () => {
    setFieldClasses(
      classnames(
        {
          focused: isFocused() || props.floatLabelAlways,
          "float-label": props.floatLabel,
          filled: isFilled() || (props.ref && props.ref.value.length > 0),
          "has-placeholder": props.placeholder,
          "has-prefix": props.prefix,
          "has-error": props.fieldErrors,
          "fue-field--sm": props.size === "small" ? true : false,
        },
        props.class
      )
    );
  };

  onMount(() => {
    determineFieldClasses();
  });

  createEffect(() => {
    determineFieldClasses();
  });

  const onChangeHandler = (e: any) => {
    console.log(e);
    if (e.target && e.target.value && e.target.value.length > 0) {
      setFilled(true);
    } else {
      setFilled(false);
    }
    props.onChange && props.onChange(e);
  };

  const onKeyUpHandler = (e: any) => props.onKeyUp && props.onKeyUp(e);
  const onKeyDownHandler = (e: any) => props.onKeyDown && props.onKeyDown(e);

  const onBlurHandler = (e: any) => {
    setFocus(false);
    props.onBlur && props.onBlur(e);
  };
  const onFocusHandler = (e: any) => {
    console.log("dsa");
    setFocus(true);
    props.onFocus && props.onFocus(e);
  };

  return (
    <div class={`field ${fieldClasses()}`}>
      <div class="field-contents">
        <Show
          when={props.type === "textarea"}
          fallback={
            <input
              onInput={onChangeHandler}
              onBlur={onBlurHandler}
              onFocus={onFocusHandler}
              onKeyDown={onKeyDownHandler}
              onKeyUp={onKeyUpHandler}
              placeholder={props.placeholder}
              type="text"
              ref={setFieldEl}
              id={`text-field-${id}`}
              autocomplete={props.autoComplete ? "on" : "off"}
            />
          }
        >
          <textarea
            ref={setFieldEl}
            id={`text-field-${id}`}
            cols={30}
            rows={2}
            onInput={onChangeHandler}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
          ></textarea>
        </Show>
        <label id={props.labelId} for={`text-field-${props.fieldId}`}>
          {props.children}
          {props.required && <span class="required">*</span>}
        </label>
      </div>
      <div class="error">
        <span class="error--msg">{props.errorLabel}</span>
      </div>
    </div>
  );
};

export default Field;

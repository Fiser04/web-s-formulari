import React from "react";
import CounterExample from "./RHCounterExample";
import InputExample from "./RHInputExample";
import FetchExample from "./RHFetchExample";
import UpdateEffectExample from "./RHUpdateEffectExample";
import UnmountEffectExample from "./RHUnmountEffectExample";
import FocusInputExample from "./RHFocusInputExample";

function AppReactHookExample() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Výuka React Hooks</h1>

      <h2>1. useState – počítadlo</h2>
      <CounterExample />

      <hr />

      <h2>2. useState – input</h2>
      <InputExample />

      <hr />

      <h2>3. useEffect – načtení dat</h2>
      <FetchExample />

      <hr />

      <h2>4. useEffect – reakce na změnu</h2>
      <UpdateEffectExample />

      <hr />

      <h2>5. useEffect – cleanup</h2>
      <UnmountEffectExample />

      <hr />

      <h2>6. useRef – focus na input</h2>
      <FocusInputExample />
    </div>
  );
}

export default AppReactHookExample;
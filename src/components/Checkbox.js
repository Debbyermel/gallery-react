import React, {useReducer} from "react";

export default function Checkbox() {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );
  return(
    <>
    <label htmlFor="checkbox">
      {checked ? "checked" : "not checked"}
    </label>
    <input
      id="checkbox"
      type="checked"
      value={checked}
      onChange={toggle}>
      </input>
    </>
  )
}

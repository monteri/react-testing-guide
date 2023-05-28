import Button from "../components/button/index.jsx";
import useCountStore from "../store/zustand";
import { shallow } from "zustand/shallow";

function About() {
  const { count, increment, decrement } = useCountStore(state => state, shallow);

  return (
    <>
      <h1 data-test-id="about">About</h1>
      <h3 role="counterinfo">{count}</h3>
      <Button
        onClick={() => decrement()}
        title="decrement"
      />
      <Button
        onClick={() => increment()}
        title="increment"
      />
    </>

  )
}

export default About;
import { useState } from "react";
import Button from "../components/button/index.jsx";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'

function Dashboard() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const [buttonText, setButtonText] = useState('Active');

  return (
    <>
      <h1 data-test-id="dashboard">Dashboard</h1>
      <h3 role="counterinfo" style={{ textAlign: 'center' }}>{count}</h3>
      <Button
        onClick={() => setButtonText(buttonText === 'Active' ? 'Clicked' : 'Active')}
        title={buttonText}
        style={{ backgroundColor: buttonText === 'Active' ? 'green' : 'grey' }}
      />
      <Button
        onClick={() => dispatch(decrement())}
        title="decrement"
      />
      <Button
        onClick={() => dispatch(increment())}
        title="increment"
      />
    </>
  )
}

export default Dashboard;

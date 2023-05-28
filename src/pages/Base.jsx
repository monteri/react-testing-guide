import { Outlet } from 'react-router-dom';
import Navbar from "../components/navbar";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import useCounter from "../hooks/useCounter.jsx";
import { getUser } from '../store/counterSlice'

const links = [
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'About', href: '/about' },
]

function Base() {
  // const { getUser, user } = useCounter();
  const user = useSelector(state => state.counter.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
    // getUser();
  }, [dispatch])
  
  console.log(user);

  return (
    <>
      <Navbar links={links}></Navbar>
      <Outlet />
    </>
  )
}

export default Base;
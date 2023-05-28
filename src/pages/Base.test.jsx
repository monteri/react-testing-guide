import {describe, test, expect, vi, beforeEach} from 'vitest'
import counterReducer, { getUser } from "../store/counterSlice";
import axios from "axios";
import useCountStore from "../store/zustand";

vi.mock('axios')

const userMock = { name: 'Mykola', username: 'agent' };

describe('Base', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  });

  test("redux", async () => {
    axios.get.mockImplementation(async () => ({ data: userMock }))
    const result = await counterReducer({ user: null }, getUser())
    expect(result).toEqual({ user: userMock })
  });

  test("zustand", async () => {
    axios.get.mockImplementation(async () => ({ data: userMock }))
    const { getUser } = useCountStore.getState();
    await getUser();

    expect(useCountStore.getState().user).toEqual(userMock)
  });
})

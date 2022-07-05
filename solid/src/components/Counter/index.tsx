import { Component, createSignal, createEffect } from 'solid-js'

const Counter: Component = () => {
  const [count, setCount] = createSignal(1)
  createEffect(() => console.log(count())) // => 1
  setCount(2)
  setCount(3)
  return <></>
}

export default Counter

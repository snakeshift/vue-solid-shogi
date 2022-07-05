import type { Component } from 'solid-js'

import logo from '~shared/assets/logo.svg'
import Counter from './components/Counter'

const App: Component = () => {
  return (
    <div class="container">
      <div>
        <img src={logo} class="logo" alt="logo" />
      </div>
      <div>
        <Counter />
      </div>
    </div>
  )
}

export default App

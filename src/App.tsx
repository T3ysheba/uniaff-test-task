import type { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { PageLayout } from 'components'
import { store } from 'libraries/redux'

import 'styles/index.global.scss'

const App: FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <PageLayout />
    </Provider>
  </BrowserRouter>
)

export default App

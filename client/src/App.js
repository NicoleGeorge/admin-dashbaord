import React from 'react'
import { Admin, Resource, Resources } from 'react-admin'
import restProvider from 'ra-simple-data-rest'
import PostList from './components/PostList'

function App() {
  return 
  <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource  />
  </Admin>
}

export default App;

import React from 'react'
import Header from './Header'
import { Layout } from 'antd';
function Main({children}) {

  return (
    <Layout>
        <Header/>
        {children}
    </Layout>
  )
}

export default Main
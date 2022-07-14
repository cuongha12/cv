import React from 'react'
import Header from './Header'
import { Layout } from 'antd';
function Main({children}) {

  return (
    <Layout style={{ background: '#fff'}}>
        <Header/>
        {children}
    </Layout>
  )
}

export default Main
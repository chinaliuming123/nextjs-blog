import Head from 'next/head'
import Link from 'next/link'
import { Layout, Menu, Affix } from 'antd'
import Router from 'next/router'

import { DribbbleSquareFilled, MehFilled } from '@ant-design/icons'
const { Header, Footer, Content } = Layout

export default function BaseLayout({ children, home }) {

  const onMenuClick = ({ key }) => {
    Router.push(key)
  }

  return (
    <Layout style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }} >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header style={{ height: 'auto', background: '#fff' }}>{
        <Menu onClick={onMenuClick} mode="horizontal">
          <Menu.Item key="/" icon={<DribbbleSquareFilled />} >首页</Menu.Item>
          <Menu.SubMenu icon={<MehFilled />} title="关于我">
            <Menu.Item key="/about">关于我</Menu.Item>
            <Menu.Item key="/about/experience">个人经历</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      }</Header>
      <Content style={!home ? { width: '80%', margin: '0 auto' } : {}}>
        {children}
        {!home && (
          <Affix style={{ position: 'absolute', bottom: '10', left: '10' }}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </Affix>
        )}
      </Content>
      <Footer style={{ background: '#001529' }}>
        <div>
          <div style={{ color: '#fff', textAlign: 'center' }}>© 2020 | Proudly Powered by nextJs</div>
        </div>
      </Footer>
    </Layout>
  )
}
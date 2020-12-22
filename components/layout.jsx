import Head from 'next/head'
import Link from 'next/link'
import { Layout, Affix, Menu } from 'antd'
import { useRouter } from 'next/router'
import '../styles/Layout.module.css'

const { Header, Footer, Content } = Layout
const { SubMenu } = Menu
export default function BaseLayout({ children, home }) {

  // logo点击事件，返回首页
  const logoClick = () => {
    const router = useRouter()
    router.push('/')
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
      {/* 头部 */}
      <Header style={{
        height: '70px', width: '100%', padding: 0, background: '#fff', lineHeight: '70px'
      }}>
        <div style={{
          width: '1200px', height: '70px', margin: '0 auto', display: 'flex', justifyContent: 'space-between'
        }}>
          {/* 左侧logo */}
          <div className="logo-wrapper" onClick={logoClick}>
            <img src="/logo.png" />
            <div className="logo-text">
              <div>柒柒普惠</div>
              <div>助力小微，普惠大众</div>
            </div>
          </div>
          {/* 右侧导航 */}
          <nav className="nav-wrapper">
            <Menu className="nav-list" mode="horizontal">
              <Menu.Item key="mail" >
                首页
              </Menu.Item>
              <SubMenu key="about" title="关于我们">
                <Menu.Item key="about-company-profile">公司介绍</Menu.Item>
                <Menu.Item key="about-company-qualification">公司资质</Menu.Item>
              </SubMenu>
              <SubMenu key="business-category" title="业务范畴">
                <Menu.Item key="business-category-all-product">全部产品</Menu.Item>
                <Menu.Item key="business-category-personal-credit-loan">个人信用贷款</Menu.Item>
                <Menu.Item key="business-category-sme-credit-loan">中小企业信用贷款</Menu.Item>
                <Menu.Item key="business-category-car-mortgage">金融机构汽车抵押</Menu.Item>
                <Menu.Item key="business-category-credit-card-processing">信用卡办理</Menu.Item>
                <Menu.Item key="business-category-personal-consumption-mortgage">个人消费类抵押贷款</Menu.Item>
                <Menu.Item key="business-category-smes-and-personal-mortgages">中小企业经营类抵押贷款</Menu.Item>
                <Menu.Item key="business-category-bill-business">金融过桥、垫资、票据等业务</Menu.Item>
                <Menu.Item key="business-category-personal-housing-mortgage-loan">个人住房按揭贷款</Menu.Item>
              </SubMenu>
              <SubMenu key="news" title="新闻资讯">
                <Menu.Item key="news-industry">行业新闻</Menu.Item>
                <Menu.Item key="news-society">柒柒头条</Menu.Item>
              </SubMenu>
              <SubMenu key="service-center" title="服务中心">
                <Menu.Item key="service-center-software-and-hardware">软硬件开发服务</Menu.Item>
                <Menu.Item key="service-center-Information-service">财务信息咨询服务</Menu.Item>
                <Menu.Item key="service-center-outsourcing-services">金融外包服务</Menu.Item>
                <Menu.Item key="service-center-agency-service">知识产权代理服务</Menu.Item>
              </SubMenu>
              <Menu.Item key="app-introduct" >
                APP介绍
              </Menu.Item>
              <Menu.Item key="contact-us" >
                联系我们
              </Menu.Item>
            </Menu>
          </nav>
        </div>
      </Header>
      {/* 主体 */}
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
      {/* 底部 */}
      <Footer style={{ background: '#001529' }}>
        <div>
          <div style={{ color: '#fff', textAlign: 'center' }}>© 2020 | Proudly Powered by nextJs</div>
        </div>
      </Footer>
    </Layout >
  )
}

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { List, Avatar, Divider, PageHeader, Carousel } from 'antd'
import { UserOutlined, DribbbleSquareFilled } from '@ant-design/icons';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>首页</title>
      </Head>
      <section>
        <PageHeader
          title='首页'
          avatar={{ src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" }} />
      </section>
      <section>
        {/* 轮播图 */}
        <Carousel autoplaySpeed={3500} dots autoplay effect="fade">
          <div>
            <h3 style={contentStyle}>next框架</h3>
          </div>
          <div>
            <h3 style={contentStyle}>ant design组件库</h3>
          </div>
          <div>
            <h3 style={contentStyle}>SSR</h3>
          </div>
          <div>
            <h3 style={contentStyle}>个人博客</h3>
          </div>
        </Carousel>
        {/* 文章列表 */}
        <List
          style={{ width: '80%', margin: '0 auto' }}
          itemLayout="horizontal"
          dataSource={allPostsData}
          renderItem={({ id, date, title }) => (
            <>
              <List.Item>
                <List.Item.Meta
                  // avatar={<Avatar size={64} icon={<UserOutlined />} />}
                  title={<Link href="/posts/[id]" as={`/posts/${id}`} passHref>
                    <a>{title}</a>
                  </Link>}
                  description={date}
                />
              </List.Item>
              <Divider style={{ background: '#ccc' }} dashed />
            </>
          )}
        />
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  // const allPostsData = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
  return {
    props: {
      allPostsData
    }
  }
}
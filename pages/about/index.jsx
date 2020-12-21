import Layout from '../../components/layout'
import Head from 'next/head'
import { Avatar, PageHeader, Empty } from 'antd'


export default function Post() {
  return (
    <Layout>
      <Head>
        <title>关于我</title>
      </Head>
      <section>
        <PageHeader
          title='关于我'
          // avatar={<Avatar icon={<DribbbleSquareFilled />} />}
          subTitle="This is a subtitle"
        />
        <Empty description="暂时没有数据" />
      </section>

    </Layout>
  )
}
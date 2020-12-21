import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../components/layout'
import { Timeline, PageHeader } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
export default function experience() {
  const router = useRouter()
  return (
    <Layout>
      <Head>
        <title>经历</title>
      </Head>
      <section>
        <PageHeader
          title='经历'
          // avatar={<Avatar icon={<DribbbleSquareFilled />} />}
          subTitle="This is a subtitle"
        />
        <Timeline mode="alternate">
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit</Timeline.Item>
          <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Technical testing 2015-09-01</Timeline.Item>
        </Timeline>
      </section>
    </Layout>
  )
}


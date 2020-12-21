import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import { PageHeader, Badge, Divider, Tag } from 'antd'
import CommentComponent from '../../components/comment'

function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section>
        <PageHeader
          title={postData.title}
          avatar={{ src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' }}
          subTitle={postData.date}
        />
        <Divider style={{ background: '#ccc' }} dashed />
        <Badge status={postData.status} />
        <Tag color={postData.tagColor}>{postData.tagText}</Tag>
      </section>
      <article>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <CommentComponent />
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default Post
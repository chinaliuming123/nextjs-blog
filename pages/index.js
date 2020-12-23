import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import { List, Divider, Carousel, Image } from 'antd'
import Title from '../components/home/Title'
import { useRouter } from 'next/router'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>柒柒普惠</title>
      </Head>
      <section>
        {/* 轮播图 */}
        <Carousel autoplaySpeed={3500} dots autoplay effect="scrollx">
          {bannerLists.map(img => (
            <div key={img.editId} className={bannerStyle}>
              <Image preview={false} src={img.picturePath} alt={img.keyword} />
            </div>
          ))}
        </Carousel>
      </section>
      <div className="products">
        {/* 产品分类 */}
        <Title topTitle="product classification" bottomTitle="产品分类" />
        <section>
          <div className="product-list">
            <img src="product.imgUrl" alt />
            <div className="product-title-top"></div>
            <div className="product-title-bottom"></div>
            <div className="price"></div>
          </div>
        </section>

        {/* <List
          style={{ width: '80%', margin: '0 auto' }}
          itemLayout="horizontal"
          dataSource={allPostsData}
          renderItem={({ id, date, title }) => (
            <>
              <List.Item>
                <List.Item.Meta
                  title={<Link href="/posts/[id]" as={`/posts/${id}`} passHref>
                    <a>{title}</a>
                  </Link>}
                  description={date}
                />
              </List.Item>
              <Divider style={{ background: '#ccc' }} dashed />
            </>
          )}
        /> */}
      </div>
    </Layout>
  )
}

const bannerStyle = {
  height: '600px',
  width: '100%'
};

const bannerLists = [{
  area: "120000",
  areaName: "天津市",
  content: '<p><img src="http://qqph.oss-cn-beijing.aliyuncs.com/images/179f9c0b-23bf-4ce5-a290-feeb576dc70e.jpg"></p>',
  editId: "ff8080817374119601737659201f0069",
  editTs: "2020-08-20 10:41:26",
  id: "2c91656473b2f94a0173bc20d304000c",
  keyword: "痒痒挠上线啦！",
  picturePath: "https://qqph.oss-cn-beijing.aliyuncs.com/pc/pc1.png",
  sort: 0,
  state: "1",
  title: "痒痒挠上线啦！",
  ts: "2020-08-05 08:58:54",
  tsId: "ff8080817374119601737659201f0069",
  type: "首页轮播"
}, {
  area: "120000",
  areaName: "天津市",
  content: '<p><img src="http://qqph.oss-cn-beijing.aliyuncs.com/images/179f9c0b-23bf-4ce5-a290-feeb576dc70e.jpg"></p>',
  editId: "ff8080817374119601737659201f0069",
  editTs: "2020-08-20 10:41:26",
  id: "2c91656473b2f94a0173bc20d304000c",
  keyword: "痒痒挠上线啦！",
  picturePath: "https://qqph.oss-cn-beijing.aliyuncs.com/pc/pc2.png",
  sort: 0,
  state: "1",
  title: "痒痒挠上线啦！",
  ts: "2020-08-05 08:58:54",
  tsId: "ff8080817374119601737659201f0069",
  type: "首页轮播"
}]

const productLists = [
  {
    id: 0,
    imgUrl: "/icon_grxydk_nor@2x.png",
    titleTop: "个人信用贷款",
    titleBottom: "无需抵押，流程简单",
    priceText: "单笔最高50万",
    name: "business-category-personal-credit-loan"
  },
  {
    id: 1,
    imgUrl: "/icon_zxqy_nor@2x.png",
    titleTop: "中小企业信用贷款",
    titleBottom: "适用于纳税企业申请",
    priceText: "单笔最高500万",
    name: "business-category-sme-credit-loan"
  },
  {
    id: 2,
    imgUrl: "/icon_qcdy_nor@2x.png",
    titleTop: "金融机构汽车抵押",
    titleBottom: "手续简单、方便、快捷",
    priceText: "单笔最高100万",
    name: "business-category-car-mortgage"
  },
  {
    id: 3,
    imgUrl: "/icon_xyk_nor@2x.png",
    titleTop: "信用卡办理",
    titleBottom: "线上线下均可申请",
    priceText: "单笔最高100万",
    name: "business-category-credit-card-processing"
  },
  {
    id: 4,
    imgUrl: "/icon_zfandk_nor@2x.png",
    titleTop: "个人消费类抵押贷款",
    titleBottom: "适用于受薪人士",
    priceText: "单笔最高200万",
    name: "business-category-personal-consumption-mortgage"
  },
  {
    id: 5,
    imgUrl: "/icon_gqdz_nor@2x.png",
    titleTop: "金融过桥、垫资、票据等业务",
    titleBottom: "解决中小企业及个人短期用款需求",
    priceText: "10万起",
    name: "business-category-bill-business"
  },
  {
    id: 6,
    imgUrl: "/icon_grdydk_nor@2x.png",
    titleTop: "中小企业经营类抵押贷款",
    titleBottom: "解决中小企业融资难问题",
    priceText: "单笔最高3000万",
    name: "business-category-smes-and-personal-mortgages"
  },
  {
    id: 7,
    imgUrl: "/icon_dxqydk_nor@2x.png",
    titleTop: "个人住房按揭贷款",
    titleBottom: "多家机构多种方案",
    priceText: "最高总价的7成",
    name: "business-category-personal-housing-mortgage-loan"
  }
]

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  // const allPostsData = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()
  return {
    props: {
      allPostsData
    }
  }
}
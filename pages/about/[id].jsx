import { useRouter } from 'next/router'
import { Empty, Button } from 'antd'
export default function aboutId() {
  const router = useRouter()
  return (
    <Empty>
      {/* <Button onClick={router.push('/')}>返回首页</Button> */}
    </Empty>
  )
}


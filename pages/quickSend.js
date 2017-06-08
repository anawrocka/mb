import Layout from '../components/Layout.js'
import Create from '../components/Create.js'

import stylesheet from 'styles/index.scss'

const QuickSend = (props) => (
  <Layout title="Quickly send SMS" tab="quickSend">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Create />
  </Layout>
)

export default QuickSend
import Layout from '../components/Layout.js'
import Inbox from '../components/Inbox.js'
import Link from 'next/link'
import Head from 'next/head';
import api from '../modules/api'

import stylesheet from 'styles/index.scss'

const Index = (props) => (
  <div className="outer">
    <Head>
      <title>
        MessageBird
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://dash.cdn.messagebird.com/assets/images/favicons/apple-touch-icon-144x144.png" />
      <link rel="icon" type="image/png" href="https://dash.cdn.messagebird.com/assets/images/favicons/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/x-icon" href="https://dash.cdn.messagebird.com/assets/images/favicons/favicon.ico" />
   </Head>
    <Layout title="Messages" tab="overview">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Inbox
        messages={props.messages}
      />
    </Layout>
  </div>
)

Index.getInitialProps = async function() {
    const res = await api.get('/messages')

    return {
        messages: res.data.items
    }
}

export default Index
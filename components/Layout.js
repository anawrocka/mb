import Sidebar from './Sidebar'
import Header from './Header'

const Layout = (props) => (
  <div className="flex wrap">
    <Header />
    <Sidebar tab={props.tab} />
    <div className="content">
        <h1>{props.title}</h1>
        <div className="box white">
            {props.children}
        </div>
    </div>
  </div>
)

export default Layout

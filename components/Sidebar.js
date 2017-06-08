import PureComponent from 'react-pure-render/component'
import Link from 'next/link'
import Icon from './Icon'
import Router from 'next/router'

class Sidebar extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            tabsCollapsed: true,
        }
    }

    handleCollapse = () => {
        this.setState({
            tabsCollapsed: !this.state.tabsCollapsed
        })
    }

    render() {

        const {
            tabsCollapsed,
        } = this.state

        const activeTab = this.props.tab

        const tabs = [
          {
            name: 'overview',
            label: 'SMS Overview',
            href: '/',
          },
          {
            name: 'quickSend',
            label: 'Quick send',
            href: '/quickSend',
          }
        ]

        return (
           <div className="sidebar flex column">
                <div className={`label flex align-center ${tabsCollapsed && "active"}`} onClick={this.handleCollapse}>
                    <Icon name="message" color="#4B5669" />
                    SMS
                </div>
                {tabsCollapsed &&
                    <div className="content flex column">
                      {tabs.map((tab) => 
                          <Link key={tab.name} href={tab.href}>
                              <a className={activeTab === tab.name && 'active'}>
                                {tab.label}
                              </a>
                          </Link>
                      )}
                    </div>
                }
          </div>
        )
    }
}

export default Sidebar

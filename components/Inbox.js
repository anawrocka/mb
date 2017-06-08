import PureComponent from 'react-pure-render/component'
import Message from './Message'

import io from 'socket.io-client'

class Inbox extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            messages: this.props.messages
        }
    }

    componentDidMount() {
        this.socket = io("http://localhost:3000")
        this.socket.on('message', this.handleReceiveMessage)
    }

    componentWillUnmount() {
        this.socket.off('message', this.handleReceiveMessage)
        this.socket.close()
    }

    handleReceiveMessage = (message) => {
        message.status = 'delivered'
        message.direction = 'mo'

        this.setState({
            messages: [message].concat(this.state.messages)
        })
        return
    }
    
    render() {

        const {
            messages
        } = this.state

        return (
            <div className="inbox">
                {messages ?
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Recipient</th>
                                <th>Sender</th>
                                <th>Message</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {messages.map((message) =>
                            <Message
                                message={message}
                                key={message.id}
                            />
                        )}
                        </tbody>
                    </table>
                :
                    <p>No messages yet</p>
                }
            </div>
        )
    } 
}

export default Inbox

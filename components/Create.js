import PureComponent from 'react-pure-render/component'
import api from '../modules/api'
import MessageIcon from 'react-icons/lib/fa/comment'
import ReactNotify from 'react-notify'

class Create extends PureComponent {

    static emptyState = {
        originator: '',
        body: '',
        recipients: ''
    }

    static maxLength = 1377

    constructor(props) {
        super(props)
        this.state = Create.emptyState
    }

    handleSendMessage = (e) => {

        e.preventDefault()

        const {
            originator,
            body,
            recipients
        } = this.state

        const params = {
            originator: originator,
            body: body,
            recipients: [recipients]
        }

        api.post('/messages', params)
        .then((res) => {
            res.data.errors ?
                 this.refs.notificator.error(
                    "Error",
                    "Unable to send message: " + res.data.errors[0].description,
                    7000)
            :
                this.refs.notificator.success("Success", "Message sent", 7000)
                this.setState(Create.emptyState)
        })
        
        return false
    }

    handleInputChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {

        const {
            originator,
            body,
            recipients
        } = this.state

        return (
            <form className="create flex wrap" onSubmit={this.handleSendMessage}>
                <input id="recipients" value={recipients} onChange={(e) => this.handleInputChange(e)} placeholder="Recipient" required />
                <input id="originator" value={originator} onChange={(e) => this.handleInputChange(e)} placeholder="Originator" required />
                <textarea id="body" value={body} onChange={(e) => this.handleInputChange(e)} placeholder="Message"></textarea>
                <div className="count">{body.length}/{Create.maxLength}, {!!body.length ? Math.floor(body.length/160) + 1 : 0} SMS</div>
                <button type="submit" className="flex">
                    <MessageIcon />
                    Send SMS
                </button>
                <ReactNotify ref='notificator'/>
            </form>
        )
    }
}

export default Create

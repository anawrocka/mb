import moment from 'moment'
import ArrowLeft from 'react-icons/lib/fa/arrow-left'
import ArrowRight from 'react-icons/lib/fa/arrow-right'

const messageTypeToComponent = {
  mt: <ArrowRight />,
  mo: <ArrowLeft />
}
const Message = ({ message }) => (

    <tr className="message">
        <td>{messageTypeToComponent[message.direction]}</td>
        <td>{message.recipients ? message.recipients.items[0].recipient : message.recipient}</td>
        <td>{message.originator}</td>
        <td>{message.body}</td>
        <td>{message.recipients ? message.recipients.items[0].status.replace('_', ' ') : message.status.replace('_', ' ')}</td>
        <td>{moment(message.createdDatetime).calendar()}</td>
    </tr>
)

export default Message

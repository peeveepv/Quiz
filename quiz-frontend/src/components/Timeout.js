import React from 'react'
import { connect } from 'react-redux'
import { Button, Message } from 'semantic-ui-react'
import { initialize } from '../reducers/questionReducer'
import { notify } from '../reducers/notificationReducer'
import { resetTimer, stopTimer } from '../reducers/timeReducer'
import { zeroPoints } from '../reducers/pointsReducer'

class Timeout extends React.Component {

    componentDidMount = async () => {
        this.props.stopTimer()
    }
    
    handleClick = () => {
        this.props.initialize()
        this.props.notify('')
        this.props.zeroPoints()
        this.props.resetTimer()
    }

    
    render() {
    return (
        <div>
            <Message>
            <Message.Header>Aiaiai, aika loppui..</Message.Header> 
            <p>Onnistuit keräämään { this.props.points } pistettä.</p></Message> 
            <Button onClick={this.handleClick}>Yritä uudestaan</Button>       
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        points: state.points
    }
}

export default connect(
    mapStateToProps,
    { initialize, notify, zeroPoints, resetTimer, stopTimer }
)(Timeout)
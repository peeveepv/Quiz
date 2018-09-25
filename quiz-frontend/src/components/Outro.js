import React from 'react'
import { connect } from 'react-redux'
import { Button, Message } from 'semantic-ui-react'
import { initialize } from '../reducers/questionReducer'
import { notify } from '../reducers/notificationReducer'
import { zeroPoints } from '../reducers/pointsReducer'
import { resetTimer, stopTimer } from '../reducers/timeReducer'

class Outro extends React.Component {
    componentDidMount = async () =>{
        this.props.stopTimer()
    }
    
    handleClick = () => {
        this.props.initialize()
        this.props.notify('')
        this.props.resetTimer()
        this.props.zeroPoints()
    }

    title = () => {
        if(this.props.points < 4){
            return 'Tietämätön...'
        } else if (this.props.points < 8){
            return 'Semi-ok'
        } else if (this.props.points < 10){
            return 'Kekkostieteiljä'
        } else {
            return 'KEKKOSMESTARI!!'
        }
    }
    
    render() {
    return (
        <div>
            <Message>
            <Message.Header>Onneksi olkoon, sait { this.props.points } pistettä!</Message.Header> 
            <p>Saat näillä pisteillä tittelin: { this.title() }</p></Message> 
            <Button onClick={this.handleClick}>Pelaa uudestaan</Button>       
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
)(Outro)
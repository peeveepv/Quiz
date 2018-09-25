import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteAnswered } from '../reducers/questionReducer'
import { notify } from '../reducers/notificationReducer'
import { addPoint } from '../reducers/pointsReducer'
import { Table, Segment, Divider, Label, Progress } from 'semantic-ui-react'
import Notification from './Notification'
import { startTimer, stopTimer, resetTimer } from '../reducers/timeReducer'


class Questions extends Component {

    componentDidMount = async () => {
        this.props.stopTimer()
        this.props.resetTimer()
        this.props.startTimer()
    }
   
    guess = (question, answer) => async () => {
        this.props.deleteAnswered(question)
        if(answer.right){
            this.props.addPoint()
            this.props.notify('Hyvä, vastasit oikein!')
        }else {
            this.props.notify('VÄÄRIN!')
        }
    }
  
  render() {
    return (
      <Segment>
        <Progress percent={this.props.time} indicating/>
        <Notification/>
        <Divider hidden/>
        <Label>Pisteitä: {this.props.points}</Label>
        <Label>Kysymyksiä jäljellä: {this.props.questions.length}</Label>
        <Divider hidden/>
        {this.props.questions.map(question => 
        <div key={question._id}>
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>{question.text}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {question.answers.map(answer => 
                    <Table.Row key={answer._id} onClick={this.guess(question, answer)}>
                        <Table.Cell style={{cursor: 'pointer', fontWeight: 'normal'}}>{answer.answer}</Table.Cell>
                    </Table.Row >)}  
                </Table.Body>         
            </Table>
            <Divider hidden/>
        </div>
        )}
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        points: state.points,
        time: state.time
    }
}

export default connect(
  mapStateToProps,
  { deleteAnswered, notify, addPoint, stopTimer, startTimer, resetTimer }
) (Questions);

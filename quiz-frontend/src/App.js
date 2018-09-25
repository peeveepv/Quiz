import React, { Component } from 'react';
import { connect } from 'react-redux'
import { initialize } from './reducers/questionReducer'
import Intro from './components/Intro'
import Outro from './components/Outro'
import Questions from './components/Questions'
import { Container, Header } from 'semantic-ui-react'
import { HashRouter, Route } from 'react-router-dom'
import Timeout from './components/Timeout';
import { resetTimer } from './reducers/timeReducer'

class App extends Component {
  componentDidMount = async () => {
    this.props.initialize()
    this.props.resetTimer()
  }

  start = (history) => {
    history.push('/questions') 
  }

  checkGame = () => {
    if(this.props.questions.length === 0){
      return <Route exact path="/questions" render={({history}) => <Outro history={history}/>}></Route>
    } else if (this.props.time === 0){
      return <Route exact path="/questions" render={({history}) => <Timeout history={history}/>}></Route>
    }
    return <Route exact path="/questions" render={({history}) => <Questions history={history}/>}></Route>
  }

  render() {
    return (
      <HashRouter>
      <Container>
        <Header as='h1'>Kekkosvisa</Header>
        <Route exact path="/" render={({history}) => <Intro start={this.start} history={history}/>}></Route>
        {this.checkGame()}
      </Container>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      questions: state.questions,
      time: state.time
  }
}

export default connect(
  mapStateToProps,
  { initialize, resetTimer }
) (App);

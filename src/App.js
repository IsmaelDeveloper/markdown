import './App.css';
import { Component, Fragment } from 'react';
import marked from 'marked';
import {sampleText} from './sampleText'
class App extends Component {

  state = {
    text: sampleText
  }

  componentDidMount(){
    const text = localStorage.getItem('text')

    if(text){
    this.setState({ text })
    }else{
      this.setState(this.state.sampleText)
    }
  }

  componentDidUpdate(){
    const { text } = this.state
    localStorage.setItem('text', text)
  }
 

  handleChange = event => {
    const text = event.target.value
    this.setState({text})
  }


  renderText = text =>{
   const  __html =  marked(text, {sanitize: true})
    return { __html }
  }

 render(){
  return (
  <div className="container">
    <div className="row">
      <div className="col-sm-6">
        <textarea onChange={this.handleChange} value={this.state.text} className="form-control" rows="35">
        </textarea>
      </div>
      <div className="col-sm-6">
        <div dangerouslySetInnerHTML={this.renderText(this.state.text)}></div>
      </div>
    </div>
  </div>
  )
}
}

export default App;

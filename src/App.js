import React, { Component } from "react";
import Twitter from "./Twitter";

class App extends Component {

  state = {
    loading: false,
    actived: true
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        loading: true
      })
    }, 3000) 
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }


  render() {

    const posts = [{
      title: 'xpto',
      discription: 'foo'
    },{
      title: 'new york times',
      discription: 'bar'
    },{
      title: 'treze pessoas enganadas',
      discription: 'chaves'
    },{
      title: 'freza, pq vc matou o krilin',
      discription: 'dbz',
      date: 19990305
    }]

    return (
      <div>
      <button onClick={this.onRemove}> Remover componentes </button>
      {this.state.actived && (<Twitter posts={posts} loading={this.state.loading} />)} 
      </div>
    )
   }
  }
export default App
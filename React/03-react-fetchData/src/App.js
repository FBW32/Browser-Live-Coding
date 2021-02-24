
import React, { Component } from 'react'


export default class App extends Component {
  constructor(props){
    super(props);
    console.log(this, "constructor")
    this.state={
      data:[],
      hide:false
    }

    //you can use constrcutor to initialize state and bind your custom methods
    this.changeHide= this.changeHide.bind(this)


  }

  static getDerivedStateFromProps(props,state){
    console.log("static getDerivedStateFromProps")
  /*   if(state.hide===false){
      return {hide:true}
    } */
    return null
  }


  //component did mount only executes only once
  componentDidMount(){
    console.log(this)
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(result=>{
      this.setState({
        data:result
      })
    } )

  }

  //custom method

  changeHide(){
    console.log(this)
    this.setState({
      hide: !this.state.hide
    })
  }


  render() {
    console.log("render Method")
    console.log(this)
    return (
      <div>
        <h1>Fetch data from external API</h1>
        {this.state.hide && <div> 
        {this.state.data.map(post=>{
          return(
            <div key={post.id}>
              {post.title}
            </div>
          )
        })}
        </div> }
        
        <button onClick={this.changeHide}>change hide/show</button>
      </div>
    )
  }
}

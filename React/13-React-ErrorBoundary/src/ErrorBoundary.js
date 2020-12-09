import React, { Component } from 'react'
import FallbackUI from './FallbackUI'

export default class ErrorBoundary extends Component {
    state={
        isError:false,
        message:""
    }

  /*   static getDerivedStateFromError(err){
        if(err){
            return( {isError:true})
        }
    } */
    componentDidCatch(error){
        console.log(error.message)
        if(error){
         this.setState({
            isError:true,
            message:error.message
        })   
        }
        
    }
    render() {
        if(this.state.isError){
            return(
            <FallbackUI message= {this.state.message}/>
            )
        }else{
            return (
            <div>
                    {this.props.children}
            </div>
        )
        }
        
    }
}

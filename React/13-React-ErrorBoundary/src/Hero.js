import React, { Component } from 'react'
import Style from "styled-components"


const H2= Style.h2`
  background-color: gray;
  text-align:center;
`

const h2styling= {
    backgroundColor:"gray",
    textAlign:"center"
}

export default class Hero extends Component {
    render() {
        if(this.props.hero==="Joker"){
            throw new Error("joker is not a hero")
        }

        return (
            <div>
                <h2 style={h2styling} >Hero name is {this.props.hero}</h2>
                {/* <H2>Hero name is {this.props.hero}</H2> */}
            </div>
        )
    }
}




import React from "react"
import Information from "./components/Information"
import About from "./components/About"
import Footer from "./components/Footer"
export default function(){
  return(
    <div className="container">
      <img src="https://dw9to29mmj727.cloudfront.net/misc/newsletter-naruto3.png"/>
      <Information/>
      <About/>
      <Footer/>
      </div>
  )
}
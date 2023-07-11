import React from 'react'
const courrentYear = new Date().getFullYear()
const footerStyle={
    position: "absolute",
    bottom:"10px",
   textAlign:"center",
   width:"100%",
   color:"gray"

}


function Footer(){

return <footer style={footerStyle} > Copyright © {courrentYear}</footer>

}


export default Footer

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>

const headerStyle={
color: "white",
backgroundColor:"orange",
width:"100%",
height:"80px",
marginTop:"0px",
display:"flex",
alignItems:"center",
fontFamily: "'Roboto', sans-serif"


}



function Header(){

return  <div style={headerStyle} > <h1 style={{position:"relative", left:"20px"}} > Keep</h1></div>

}

export default Header
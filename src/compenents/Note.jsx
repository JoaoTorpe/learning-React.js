
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>


const noteStyle={
    marginTop: "20px",
    marginLeft:"50px",
    padding:"20px",
minHeight: "150px",
width: "300px",
backgroundColor:"#e1e2e3",
borderRadius: "5px" ,
boxShadow:"5px 5px 10px #aaaaaa",
display:"flex",
flexDirection:"column",
gap:"10px",
fontFamily: "'Roboto', sans-serif"
}


function Note(props){

 return <div style={noteStyle} ><h1>{props.title}</h1> <p>{props.content}</p> </div>

}

export default Note
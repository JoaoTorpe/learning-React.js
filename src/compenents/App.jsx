import Header from "./header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes"

function createNote(noteData){
   return <Note 
        title={noteData.title}
        content ={noteData.content}
   
     />

}

function App(){

return <div>
<Header /> 
<div className="notesContainer" >
{notes.map(createNote)}
</div>

 <Footer/>
</div>

}


export default App 
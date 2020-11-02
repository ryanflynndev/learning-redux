import React from 'react'
class NotesContainer extends React.Component {

    
    renderNotes = () => {
        const notes =  [
            {
                "id": 1,
                "content": "First Note",
                "completed": "False"
            },
            {
                "id": 2,
                "content": "Second Note",
                "completed": "False"
            },
            {
                "id": 3,
                "content": "Third Note",
                "completed": "False"
            },
        ]
        return notes.map(note => {
            return <li>{note.content}</li>
        })
    }

    render() {
        return(
            <div>
                {this.renderNotes()}
            </div>
        )
    }
}





export default NotesContainer
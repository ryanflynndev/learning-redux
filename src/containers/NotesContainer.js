import React from 'react'

NOTES = { "notes": [
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
}

function renderNotes() {
    NOTES.map(note => {
        <li>note.content</li>
    })
}

function NotesContainer(){
    return(
        <div>
            {renderNotes()}
        </div>
    )
}

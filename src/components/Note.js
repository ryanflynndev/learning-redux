import React from 'react'


class Note extends React.Component {



    render() {
        return(
            <div>
                <li>{this.props.note.content}</li>
            </div>
            
        )
    }
}

export default Note
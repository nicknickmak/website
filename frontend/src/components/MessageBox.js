import React from 'react'

export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.variaent || 'info'}`}>
            {props.children} 
            {/* this displays the content inside <MessageBox></MessageBox> */}
        </div>
    )
}
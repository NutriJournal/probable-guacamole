import React from 'react'

const CodeElement = (props) => {
    return (
        <div>
            <pre {...props.attributes}>
                <code>{props.children}</code>
            </pre>
        </div>
    )
}

export default CodeElement;

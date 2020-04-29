import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor, Transforms, Editor, Text } from 'slate';

// import custom elements
import CodeElement from './elements/CodeElement.js';
import DefaultElement from './elements/DefaultElement.js';
import BoldElement from './elements/BoldElement.js';

const TextEditor = () => {
    const editor = useMemo(() => withReact(createEditor()), [])

    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'My fitness journey starts today' }]
        }
    ])

    const renderElement = useCallback((props) => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])
    

    const renderLeaf = useCallback((props) => {
        return <Leaf {...props} />
    }, []);
    
    return (
        <Slate editor={editor} value={value} onChange={value => setValue(value)}>
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={event => {
                    if (!event.ctrlKey) {
                        return
                    }
                    
                    switch (event.key) {
                        case '`': {
                            event.preventDefault()
                            const [match] = Editor.nodes(editor, {
                                match: n => n.type === 'code'
                            })
                            Transforms.setNodes(
                                editor,
                                { type: match ? 'paragraph' : 'code' },
                                { match: n => Editor.isBlock(editor, n)}
                            )
                            break
                        }

                        case 'b': {
                            event.preventDefault()
                            Transforms.setNodes(
                                editor,
                                { bold: true },
                                { match: n => Text.isText(n), split: true }
                            )
                            break
                        }
                    }
                }} />
        </Slate>
    )
}

const Leaf = props => {
    return (
        <span 
            {...props.attributes}
            style={{ fontWeight: props.leaf.bold ? 'font-bold' : 'font-normal' }}
            >
            {props.children}
        </span>
    )
}

export default TextEditor;
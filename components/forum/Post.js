import React, {useState} from 'react'
import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router'
import { ADD_POST } from '../../gql/mutations.js';
import { CenteredContainer, Spacer } from '../../components/Layout/LayoutPrimitives.js';

const CreatePost = () => {

    const router = useRouter();
    
    const [postData, setPostData] = useState({});
    const [addPost] = useMutation(ADD_POST);

    const handleChange = (e) => {
        setPostData({...postData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addPost({
            variables: {
                title: postData.title,
                body: postData.body
            }
        })
        router.push('/forum/posts')
    }
    
    return (
        <div>
            <CenteredContainer>
                <h1 className="text-xl muli my-2">Create a Post</h1>
                <div className="w-full mb-12">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <input 
                                placeholder="Title"
                                className="my-4 p-2 border rounded-sm border-gray-100"
                                name="title"
                                onChange={handleChange}></input>
                            <textarea 
                                rows="15" 
                                cols="75"
                                placeholder="Text" 
                                className="w-full resize-none p-2 border rounded-sm border-gray-100"
                                name="body"
                                onChange={handleChange}></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="float-right muli text-xs rounded w-24 py-1 mx-2 my-4 bg-cyan-300 text-white">Create</button>
                        <button className="float-right muli text-xs rounded w-24 py-1 mx-2 my-4 text-cyan-300 border border-cyan-300">Cancel</button>
                    </form>
                </div>
            </CenteredContainer>
        </div>
    )
}

export default CreatePost;
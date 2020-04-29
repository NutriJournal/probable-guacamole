import React, {useState} from 'react'
import { useRouter } from 'next/router';
import {DELETE_POST} from '../../gql/mutations.js';
import { useMutation } from '@apollo/react-hooks';

const Menu = (props) => {
    const router = useRouter();
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [deletePost] = useMutation(DELETE_POST);

    return (
        <div 
            className="relative mx-2"
            >
            <div className="bg-white border border-gray-900 text-xs rounded py-1 px-4 right-0 bottom-full flex flex-col justify-center w-20">
                <button
                    onClick={() => router.push('/forum/edit/[edit]', `/forum/edit/${props.data.id}`)}>Edit</button>
                <button 
                onClick={() => {
                    deletePost({
                        variables: {
                            id: props.data.id
                        }
                    })
                    props.refetch()
                }}>Delete</button>
            </div>
        </div>
    )
}

export default Menu;
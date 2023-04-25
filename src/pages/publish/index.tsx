import { useRef, useState } from 'react';
import styles from './publish.module.css';
import { ApiService } from '@/src/data/services/apiService';
import { useSession, signIn, signOut } from 'next-auth/react'

export default function PostPublish() {
    const {data: session} = useSession(),
        [title, setTitle] = useState(''),
        [description, setDescription] = useState(''),
        [picture, setPicture] = useState(''),
        blogEditorRef = useRef<HTMLDivElement>(null)

    async function sendPost(event: FocusEvent) {
        event.preventDefault();
        const postContent = blogEditorRef.current?.innerHTML || "";
        if (
            title.length > 0 &&
            description.length > 0 &&
            picture.length > 0 &&
            postContent.length > 0
        ) {
            await ApiService.post(
                'posts', {
                data: {
                    title,
                    description,
                    picture,
                    content: postContent,
                }
            }
            )
            resetForm()
        }
    }

    function resetForm() {
        setTitle('');
        setDescription('');
        setPicture('');
        if (blogEditorRef.current) {
            blogEditorRef.current.innerHTML = '';
        }
    }

    if (!session) {
        return (
            <div>
                <button onClick={()=>signIn()}>Login</button>
            </div>
        )
    }

    return (
        <>
            <div>
            <button onClick={()=>signOut()}>Logout</button>
            </div>
            <h2 className={styles['page-title']}>Novo Post</h2>
            <form
                className={styles['post-form']}
                onSubmit={sendPost}
            >
                <input placeholder='Titulo'
                    value={title}
                    type='text'
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input placeholder='Descrição'
                    type='text'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <input placeholder='Imagem'
                    value={picture}
                    type='URl'
                    onChange={(event) => setPicture(event.target.value)}
                />

                <div
                    className={styles['post-content']}
                    contentEditable
                    ref={blogEditorRef}
                />

                <button type='submit'>
                    Publicar
                </button>
            </form>

        </>
    );
}
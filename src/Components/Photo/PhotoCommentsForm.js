import React, {useState} from 'react'
import { ReactComponent as Enviar } from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import { COMMENT_POST } from '../../api'
import Error from '../Helper/Error'

const PhotoCommentsForm = ({id, setComments}) => {

    const { request, error } = useFetch()

    const [ comment, setComment ] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        const {url, options} = COMMENT_POST(id, {comment})
        const { response, json } = await request(url, options)
        if(response.ok) {
            setComment('')
            setComments((comments) => [...comments, json])
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                id="comment"
                name="comment"
                placeholder="Comente..."
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
            />
            <button>
                <Enviar />
            </button>
            <Error error={error} />
        </form>
    )
}

export default PhotoCommentsForm

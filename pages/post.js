// import { withRouter } from "next/router"
import Axios from "axios"

const Post = ({ id, comments }) => {
    return (
        //alternative withRouter vs query string from getServerSideProps
        <div>
            <h1>Comments for Post #{id}</h1>
            {comments.map((comment) => {
                return <Comment key={comment.id} {...comment} />
            })}
        </div>
    )
}

const Comment = ({ email, body }) => {
    return (
        <div>
            <h5>{email}</h5>
            <p>{body}</p>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    console.log(query)
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
    const { data } = res
    console.log(data[0])

    return {
        props: { ...query, comments: data }, // will be passed to the page component as props
    }
}

export default Post;
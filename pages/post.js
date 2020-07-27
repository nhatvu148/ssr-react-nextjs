const Post = ({ query }) => {
    return (
        <h1>Post Page #{query.id}</h1>
    )
}

export async function getServerSideProps({ query }) {
    console.log(query)
    return {
        props: { query }, // will be passed to the page component as props
    }
}

export default Post;
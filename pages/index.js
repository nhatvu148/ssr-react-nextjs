import Axios from "axios"
import Link from "next/link"

const Index = ({ data, mood }) => {
    // console.log("RUNNING INDEX COMPONENT");
    // console.log(data[0])

    return (
        <div>
            <h1>My Index Page!! </h1>
            <ul>
                {data.map((post) => {
                    return (<li key={post.id}>
                        <Link href={`/post?id=${post.id}`}><a>{post.title}</a></Link>
                    </li>)
                })}
            </ul>
        </div>
    );
};

export async function getServerSideProps(context) {
    console.log("Get data inside getServerSideProps")
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts`)
    const { data } = res

    console.log(data[0])
    return {
        props: { data, mood: "HAPPY" }, // will be passed to the page component as props
    }
}

export default Index;

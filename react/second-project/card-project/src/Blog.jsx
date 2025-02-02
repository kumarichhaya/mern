import data from './data.json';
import Post from './Post';

function Blog() {
    console.table(data);

    return (
        <section className='container text-center'>
            <div className=" row justify-content-md-center gap-3">
                {
                    data.map((d,i) => (
                        <Post key={i} data={d} />
                    ))
                }
            </div>
        </section>
    );
}

export default Blog;

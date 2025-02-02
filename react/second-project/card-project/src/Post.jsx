function Post({data}) {
    return (
            <div className="col-md-4 px-3">
                <div className="card">
                    <div className="card-body">
                        <h5 class="card-title text-capitalize">{data.title}</h5>
                        <p class="card-text">{data.body}</p>
                    </div>
                </div>
            </div>

    );
}
export default Post;

// https://jsonplaceholder.typicode.com/posts
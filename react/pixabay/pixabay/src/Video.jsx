function Video({record}) {
    console.log(record)
    return (
      <>
      <div className="col-4">
        <video src={record.videos.large.url} className="w-100 p-2" controls></video>
        </div>
      </>
    )
  }
  export default Video;
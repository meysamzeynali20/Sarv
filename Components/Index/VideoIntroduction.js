const VideoIntroduction = () => {

    return <section className="bg-[#252525] my-28">
        <div className="max-w-7xl mx-auto">
            <video className="w-full h-full" controls>
                <source src="movie.mp4" type="video/mp4" />
            </video>
        </div>
    </section>
}

export default VideoIntroduction
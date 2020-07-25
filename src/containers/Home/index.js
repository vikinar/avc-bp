const Home = () => {}

export default Home


const chapter = {
    title: String,
    shortDescription: String,
    featuredImage: String,
    page: [
        {
            // subTitle: String,
            layoutStyle: String, // {singlePost, gallery, video},
            content: Array, // {html}
        //    image: String, // {url}
            images: Array, // [urls]
            video: String,

            // highlighted: Array,
            audio: Array,
        //    singleAudio: String
        }
             ]
}

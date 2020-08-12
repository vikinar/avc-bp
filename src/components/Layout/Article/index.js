const Article = ({children}) => {
    return (
        <article className="p-4 m-auto shadow rounded bg-white content-center w-11/12 md:w-8/12 mb-4 mt-20 md:mt-16">
            {children}
        </article>
    )
}

export default Article
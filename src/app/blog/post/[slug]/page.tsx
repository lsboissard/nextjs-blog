interface BlogPostParams {
    params: {
        slug: string
    }
}

export default function BlogPost({ params }: BlogPostParams) {
    return (
        <div>
            <h1>post: {params.slug}</h1>
        </div>
    )
}
interface BlogCategoryParams {
    params: {
        category: string
    }
}

export default function BlogCategory({ params }: BlogCategoryParams) {
    return (
        <div>
            <h1>category: {params.category}</h1>
        </div>
    )
}
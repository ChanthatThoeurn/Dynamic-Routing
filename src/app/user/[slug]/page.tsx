export default async function SlugPage({params}: Readonly<{params: {slug: string}}>){
    const {slug} = await params;
    return(
        <section>
            <h1>Slug Page: {slug}</h1>
        </section>
    )
}
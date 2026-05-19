
export default async function CacheAllRoute(
    {params}:{params: Promise<{slugs: string[]}>}

){
    const {slugs} = await params;
    return(
    <section>
        <h1>Cache All Route {slugs}</h1>
      
    </section>);
}
import { NextResponse } from "next/server";

export async function GET(){
    // logic of fetching data
    const response = await fetch(process.env.BASE_ISHOP_URL+'/products');
    const data = await response.json()
    if(response?.ok){
        return NextResponse.json({
            success: true ,
            data 
        })
    }
    return NextResponse.json(
        {error: 'sorry you cannot fetch data'},
        {status: 500}
    
    )
}
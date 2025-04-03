import dbConnect from "@/app/lib/dbConnect";

export async function GET() {
    const data = await dbConnect('products').find({}).toArray();
    return Response.json({ data })
  }

  
  export async function POST(req) {
    const data = await req.body;
    const result = await dbConnect('products').insertOne(data)
    return Response.json(result)
  }
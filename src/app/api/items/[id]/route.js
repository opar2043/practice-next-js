import { ObjectId } from "mongodb";
import dbConnect from "@/app/lib/dbConnect";

export async function GET(req, {params}) {
    const p = await params;
    const id = {_id : new ObjectId(p.id)}
    const singleData =  await dbConnect('products').findOne(id);
    return Response.json({ singleData })
  }

  
export async function DELETE(req, {params}) {
    const p = await params;
    const id = {_id : new ObjectId(p.id)}
    const singleData =  await dbConnect('products').deleteOne(id)
    return Response.json({ singleData })
  }

export async function PATCH(req, {params}) {
    const p = await params;
    const postData = await req.json()
    const filter = {_id : new ObjectId(p.id)};
    const updateData =  await dbConnect('products').updateOne(filter , postData)
    return Response.json(updateData)
  }


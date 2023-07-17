import connectMongoDB from '@/utils/db'
import Categories from '@/models/Categories'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const body = await request.json()
  console.log(body)
  await connectMongoDB()
  await Categories.create(body)
  return NextResponse.json({ message: 'Categories Created' }, { status: 201 })
}

// export async function GET() {
//   await connectMongoDB()
//   const topics = await Topic.find()
//   return NextResponse.json({ topics })
// }

export async function GET() {
  try {
    await connectMongoDB()
    const data = await Categories.find()
    return new NextResponse(JSON.stringify(data), { status: 200 })
  } catch (error) {
    return new NextResponse('Error in response of DB', { status: 500 })
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id')

  await connectMongoDB()
  await Categories.findByIdAndDelete(id)

  return NextResponse.json({ message: 'Topic deleted' }, { status: 200 })
}

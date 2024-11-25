import { connectDB } from "@/lib/db/ConnectDB";
import { UserModal } from "@/lib/models/User";



export async function GET(request) {
    await connectDB();
    const Users = UserModal.find();
    return Response.json(
        {
        msg: "users fetched succesfuly",
        Users , 
        }, { status: 200 });
}

export async function HEAD(request) {
    await connectDB();
    const obj = await request.json();
    let newUser = await new UserModal(obj);
    await newUser.save();
    return Response.json({
        msg: "users added succesfully",
        user: newUser,
    }, { status: 201 })

}

export async function POST(request) { }

export async function PUT(request) { }

export async function DELETE(request) { }


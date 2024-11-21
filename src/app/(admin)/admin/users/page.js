'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"

const Users = [
  {
    fullName: "Ahmed Raza",
    Email: "ahmed@gmail.com",
    Location: "karachi",
    ProfileImage: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Events: 5,
  },
  {
    fullName: "asad Raza",
    Email: "asad@gmail.com",
    Location: "karachi",
    ProfileImage: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Events: 3,
  },
  {
    fullName: "Ayan Raza",
    Email: "ayan@gmail.com",
    Location: "karachi",
    ProfileImage: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Events: 6,
  },
  {
    fullName: "Aliyaan Raza",
    Email: "aliyaan@gmail.com",
    Location: "karachi",
    ProfileImage: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Events: 6,
  },
]

export default function UsersPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="flex justify-between text-3xl font-bold">Users</h1>
      <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Profile Image</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Events</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Users.map((user) => (
            <TableRow key={user.Email}>
              <TableCell>
                <Image
                  src={user.ProfileImage}
                  alt={`Profile picture of ${user.fullName}`}
                  height={40}
                  width={50}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell className="font-medium">{user.fullName}</TableCell>
              <TableCell>{user.Email}</TableCell>
              <TableCell>{user.Location}</TableCell>
              <TableCell className="text-right">{user.Events}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
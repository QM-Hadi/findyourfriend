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
import { Button } from "@/components/ui/button"
import { AddCategory } from "@/components/AddCategory/addcategory"


// Rename the array to avoid conflict with the component
const categoriesData = [
  {
    title: "Birthday Event",
    description: "Birthday of baby girl",
    location: "Karachi",
    thumbnail: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Session",
    description: "Bike Sell Session",
    location: "Karachi",
    thumbnail: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: new Date().toLocaleDateString(),
  },
]

export default function Categories() {
  return (
    <div className="container mx-auto px-10">
      <div className="flex justify-between text-3xl font-bold">
        <h1>Categories</h1>
        <AddCategory />
      </div>
      <Table>
        <TableCaption>A list of your recent sub categories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categoriesData.map((category) => (
            <TableRow key={category.title}>
              <TableCell>
                <Image
                  src={category.thumbnail}
                  alt={`Thumbnail for ${category.title}`}
                  height={40}
                  width={50}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell className="font-medium">{category.title}</TableCell>
              <TableCell>{category.description}</TableCell>
              <TableCell>{category.date}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

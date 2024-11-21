'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function AdminLayout({ children }) {
    const pathname = usePathname()

    const isActive = (path) => {
        return pathname === path ? "bg-primary text-primary-foreground" : ""
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="border-b">
                <div className="container mx-auto py-4">
                    <Tabs defaultValue={pathname} className="w-full">
                        <TabsList  className="w-full">
                            <Link href="/admin/dashboard" passHref legacyBehavior>
                                <TabsTrigger value="/admin/dashboard" asChild className={isActive('/admin/dashboard')}>
                                    <a>Dashboard</a>
                                </TabsTrigger>
                            </Link>
                            <Link href="/admin/users" passHref legacyBehavior>
                                <TabsTrigger value="/admin/users" asChild className={isActive('/admin/users')}>
                                    <a>Users</a>
                                </TabsTrigger>
                            </Link>
                            <Link href="/admin/events" passHref legacyBehavior>
                                <TabsTrigger value="/admin/events" asChild className={isActive('/admin/events')}>
                                    <a>Events</a>
                                </TabsTrigger>
                            </Link>
                            <Link href="/admin/categories" passHref legacyBehavior>
                                <TabsTrigger value="/admin/categories" asChild className={isActive('/admin/categories')}>
                                    <a>Categories</a>
                                </TabsTrigger>
                            </Link>
                            <Link href="/admin/subcategories" passHref legacyBehavior>
                                <TabsTrigger value="/admin/subcategories" asChild className={isActive('/admin/subcategories')}>
                                    <a>Sub Categories</a>
                                </TabsTrigger>
                            </Link>
                        </TabsList>
                    </Tabs>
                </div>
            </header>
            <main className="flex-grow container mx-auto py-6">
                {children}
            </main>
        </div>
    )
}
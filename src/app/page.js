'use client'

import Image from "next/image";
import Navbar from "@/app/Components/navbar";
import Footer from "@/app/Components/footer";
import Hero from "@/app/Components/sections/home";
import Aircraft from "@/app/Components/sections/aircraft";
import Factory from "@/app/Components/sections/factory";
import Company from "@/app/Components/sections/company";
import Staff from "@/app/Components/sections/staff";
import Departments from "@/app/Components/sections/departments";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className='min-h-screen grid grid-cols-1 gap-6 mx-auto max-w-7xl'>
                <section id = "home" className=''><Hero /></section>
                <section id = "aircraft"><Aircraft /></section>
                <section id = "factory"><Factory /></section>
                <section id = "company"><Company /></section>
                <section id = "staff"><Staff /></section>
                <section id = "departments"><Departments /></section>
            </div>
            <Footer />
        </>
    );
}

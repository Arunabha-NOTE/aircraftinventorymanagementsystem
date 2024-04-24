'use client'

import Image from "next/image";
import Navbar from "@/app/Components/navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <section id = "home"></section>
            <section id = "aircraft"></section>
            <section id = "factory"></section>
            <section id = "company"></section>
            <section id = "staff"></section>
            <section id = "departments"></section>
        </>
    );
}

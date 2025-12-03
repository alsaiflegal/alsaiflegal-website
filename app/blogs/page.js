"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, categories } from "../data/blogPosts";
import Nav from "../(home)/Nav";
import Footer from "../(home)/Footer";

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("الكل");

    const filteredPosts = selectedCategory === "الكل"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-b from-offwhite via-white to-ivory flex flex-col" dir="rtl">
            <Nav />

            <div className="flex-grow">
                {/* Hero Section with Image */}
                <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/blog_header.png"
                            alt="المدونة القانونية"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay for text readability at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto text-center mt-20">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-[fadeInUp_1s_ease-out_forwards] drop-shadow-lg">
                            المدونة القانونية
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto animate-[fadeInUp_1s_ease-out_0.2s_forwards] opacity-0 font-medium">
                            مقالات وتحليلات قانونية متخصصة من فريق شركة إبراهيم بن عبدالعزيز السيف للمحاماة
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-gold to-gold-light mx-auto mt-8 rounded-full shadow-sm animate-[fadeInUp_1s_ease-out_0.4s_forwards] opacity-0"></div>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="bg-white/95 backdrop-blur-xl">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 cursor-pointer ${selectedCategory === category
                                        ? "bg-gradient-to-r from-gold to-gold-light text-white shadow-lg scale-105"
                                        : "bg-gray-100 text-navy hover:bg-gold/10 hover:text-gold"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <Link
                                    key={post.id}
                                    href={`/blogs/${post.slug}`}
                                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-gold/50"
                                >
                                    {/* Background glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Image Container */}
                                    <div className="relative h-48 bg-navy overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-500"></div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                                            {post.category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 p-6">
                                        {/* Meta Info */}
                                        <div className="flex items-center gap-4 text-sm text-navy/60 mb-3">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {new Date(post.date).toLocaleDateString('ar-SA')}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {post.readTime}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-navy/70 leading-relaxed text-sm line-clamp-3 mb-4">
                                            {post.excerpt}
                                        </p>

                                        {/* Read More */}
                                        <div className="flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                            <span>اقرأ المزيد</span>
                                            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Hover Accent Line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </Link>
                            ))}
                        </div>

                        {/* No Results */}
                        {filteredPosts.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-navy/60 text-lg">لا توجد مقالات في هذا التصنيف</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}

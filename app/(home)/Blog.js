"use client";

import Link from "next/link";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
    // Get latest 3 posts
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-32 px-4 bg-gradient-to-b from-white via-ivory to-white" dir="rtl" id="blog">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20 animate-[fadeInUp_1s_ease-out_forwards]">
                    <h2 className="text-5xl md:text-6xl font-bold text-navy mb-6 tracking-tight">
                        المدونة القانونية
                    </h2>
                    <p className="text-lg md:text-xl text-navy/80 font-light max-w-2xl mx-auto">
                        مقالات وتحليلات قانونية متخصصة
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-gold to-gold-light mx-auto mt-8 rounded-full shadow-sm"></div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {latestPosts.map((post, index) => (
                        <Link
                            key={post.id}
                            href={`/blogs/${post.slug}`}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-gold/50 animate-[fadeInUp_0.8s_ease-out_forwards] opacity-0"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Image Placeholder */}
                            <div className="relative h-48 bg-gradient-to-br from-navy to-navy-light overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-16 h-16 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold">
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

                {/* View All Button */}
                <div className="text-center animate-[fadeInUp_1s_ease-out_0.4s_forwards] opacity-0">
                    <Link
                        href="/blogs"
                        className="group relative inline-block bg-gradient-to-br from-navy to-navy-light text-white px-10 py-4 rounded-2xl font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                    >
                        {/* Animated gradient overlay */}
                        <span className="absolute inset-0 bg-gradient-to-br from-gold via-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        {/* Button text */}
                        <span className="relative z-10 flex items-center gap-3">
                            <span>عرض جميع المقالات</span>
                            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    );
}

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../data/blogPosts";
import { notFound } from "next/navigation";
import Nav from "../../(home)/Nav";
import Footer from "../../(home)/Footer";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return {
            title: 'المقال غير موجود',
        }
    }

    return {
        title: post.title,
        description: post.excerpt,
        robots: {
            index: false,
            follow: false,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    }
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Get related posts (same category, exclude current)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col" dir="rtl">
            <Nav />

            <div className="flex-grow">
                {/* Hero Section with Image */}
                <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay for text readability at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-20">
                        {/* Category Badge */}
                        <div className="mb-6 animate-[fadeInUp_1s_ease-out_forwards]">
                            <span className="inline-block bg-gold text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                {post.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight animate-[fadeInUp_1s_ease-out_0.2s_forwards] opacity-0 drop-shadow-lg">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap justify-center items-center gap-6 text-white/90 animate-[fadeInUp_1s_ease-out_0.4s_forwards] opacity-0 font-medium">
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{new Date(post.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="max-w-4xl mx-auto px-4 -mt-20 relative z-20 pb-20">
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        {/* Featured Image Placeholder removed as header image serves this purpose */}

                        {/* Content */}
                        <div
                            className="[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-navy [&>h2]:mt-12 [&>h2]:mb-6 [&>p]:text-navy/80 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg [&>strong]:text-navy [&>strong]:font-bold [&>ul]:list-disc [&>ul]:mr-6 [&>ul]:mb-6 [&>ul]:text-navy/80 [&>li]:mb-2"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Share Section */}
                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <h3 className="text-xl font-bold text-navy">شارك المقال</h3>
                                <div className="flex gap-3">
                                    <a
                                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://alsaiflegal.com/blogs/${post.slug}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group"
                                        aria-label="Share on X (Twitter)"
                                    >
                                        <svg className="w-5 h-5 text-navy group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a
                                        href={`https://wa.me/?text=${encodeURIComponent(`${post.title} https://alsaiflegal.com/blogs/${post.slug}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
                                        aria-label="Share on WhatsApp"
                                    >
                                        <svg className="w-5 h-5 text-navy group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Back to Blog */}
                        <div className="mt-12">
                            <Link
                                href="/blogs"
                                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold transition-colors duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                </svg>
                                <span>العودة للمدونة</span>
                            </Link>
                        </div>
                    </div>
                </article>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="py-16 px-4 bg-gradient-to-b from-ivory to-offwhite">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
                                مقالات ذات صلة
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        href={`/blogs/${relatedPost.slug}`}
                                        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-gold/50"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative h-48 bg-navy overflow-hidden">
                                            <Image
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-500"></div>
                                            <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                                                {relatedPost.category}
                                            </div>
                                        </div>

                                        <div className="relative z-10 p-6">
                                            <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-navy/70 leading-relaxed text-sm line-clamp-2">
                                                {relatedPost.excerpt}
                                            </p>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>

            <Footer />
        </div>
    );
}

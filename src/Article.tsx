import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router';
import {
    ArrowLeft,
    BookOpen,
    Calendar,
    Check,
    ChevronUp,
    Clock,
    Copy,
    Eye,
    Heart,
    Linkedin,
    MessageCircle,
    Share2,
    Twitter,
    User
} from 'lucide-react';
import {ArticleService} from './articleService.js';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Article = () => {
    const {id} = useParams();
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [readingProgress, setReadingProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [copiedLink, setCopiedLink] = useState(false);

    useEffect(() => {
        const loadArticle = () => {
            const foundArticle = ArticleService.getArticleById(id);
            if (foundArticle) {
                setArticle(foundArticle);
            }
            setIsLoading(false);
        };
        loadArticle();
    }, [id]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setReadingProgress(scrollPercent);
            setShowScrollTop(scrollTop > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const shareArticle = async (platform) => {
        const url = window.location.href;
        const title = article?.title;

        if (platform === 'copy') {
            try {
                await navigator.clipboard.writeText(url);
                setCopiedLink(true);
                setTimeout(() => setCopiedLink(false), 2000);
            } catch {
                console.error('Failed to copy link');
            }
        } else if (platform === 'twitter') {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
        } else if (platform === 'linkedin') {
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getCategoryColor = (category) => {
        const colors = {
            developpement: 'from-blue-500 to-cyan-500',
            agilite: 'from-green-500 to-emerald-500',
            general: 'from-purple-500 to-violet-500'
        };
        return colors[category] || 'from-gray-500 to-gray-600';
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div
                        className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Chargement de l'article...</p>
                </div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center max-w-md mx-auto px-4">
                    <BookOpen size={64} className="mx-auto text-gray-300 mb-4"/>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Article introuvable</h1>
                    <p className="text-gray-600 mb-6">Cet article n'existe pas ou a été supprimé.</p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        <ArrowLeft size={18}/>
                        <span>Retour au blog</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
                <div
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-150"
                    style={{width: `${readingProgress}%`}}
                />
            </div>

            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur-md bg-white/80">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/blog"
                            className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform"/>
                            <span className="font-medium">Retour au blog</span>
                        </Link>

                        <div className="flex items-center space-x-4">
                            {/* Share buttons */}
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => shareArticle('twitter')}
                                    className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                                    title="Partager sur Twitter"
                                >
                                    <Twitter size={18}/>
                                </button>
                                <button
                                    onClick={() => shareArticle('linkedin')}
                                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                                    title="Partager sur LinkedIn"
                                >
                                    <Linkedin size={18}/>
                                </button>
                                <button
                                    onClick={() => shareArticle('copy')}
                                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                                    title="Copier le lien"
                                >
                                    {copiedLink ? <Check size={18} className="text-green-500"/> : <Copy size={18}/>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Article Header */}
                <header className="mb-12">
                    <div className="mb-6">
            <span
                className={`inline-block px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r ${getCategoryColor(article.category)}`}>
              {article.category === 'agilite' ? 'Agilité' :
                  article.category === 'developpement' ? 'Développement' :
                      'Général'}
            </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {article.title}
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {article.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
                        <div className="flex items-center space-x-2">
                            <User size={16}/>
                            <span className="text-sm">Gabin Bloquet</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Calendar size={16}/>
                            <span className="text-sm">{formatDate(article.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock size={16}/>
                            <span className="text-sm">{article.readTime} de lecture</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Eye size={16}/>
                            <span className="text-sm">{article.views} vues</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Heart size={16}/>
                            <span className="text-sm">{article.likes} likes</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {article.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                #{tag}
              </span>
                        ))}
                    </div>

                    <img
                        src={article.image}
                        alt={article.alt || article.title}
                        className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                    />
                </header>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h1:text-3xl prose-h1:font-bold prose-h1:mt-10 prose-h1:mb-6 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-a:text-blue-600 prose-a:hover:text-blue-800 prose-strong:text-gray-900 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-ul:list-disc prose-ul:ml-6 prose-li:mb-1 prose-img:rounded-xl prose-img:shadow-lg prose-img:my-6">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {article.content}
                    </ReactMarkdown>
                </div>

                {/* Article Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-4">
                            <button
                                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-500 transition-colors">
                                <Heart size={18}/>
                                <span>{article.likes}</span>
                            </button>
                            <button
                                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors">
                                <MessageCircle size={18}/>
                                <span>Commenter</span>
                            </button>
                            <button
                                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-green-500 transition-colors">
                                <Share2 size={18}/>
                                <span>Partager</span>
                            </button>
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                        <div className="flex items-start space-x-4">
                            <div
                                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                GB
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Gabin Bloquet</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    Développeur Full Stack passionné par l'innovation technologique et l'agilité.
                                    Je partage mes découvertes et retours d'expérience sur le développement web moderne.
                                </p>
                                <div className="flex space-x-4">
                                    <Link
                                        to="/"
                                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                                    >
                                        Voir mon portfolio
                                    </Link>
                                    <Link
                                        to="/#contact"
                                        className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                                    >
                                        Me contacter
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </article>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
                >
                    <ChevronUp size={20} className="mx-auto"/>
                </button>
            )}
        </div>
    );
};

export default Article;
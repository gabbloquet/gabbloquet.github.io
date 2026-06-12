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
    MessageCircle,
    Share2,
    User
} from 'lucide-react';
import {LinkedinIcon, TwitterIcon} from './components/icons';
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

    const getCategoryLabel = (category) => {
        const labels = {
            agilite: 'Agilité',
            developpement: 'Développement',
            general: 'Général'
        };
        return labels[category] || 'Général';
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-paper flex items-center justify-center">
                <div className="text-center">
                    <div
                        className="w-12 h-12 border-4 border-hairline border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted">Chargement de l'article...</p>
                </div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="min-h-screen bg-paper flex items-center justify-center">
                <div className="text-center max-w-md mx-auto px-4">
                    <BookOpen size={48} className="mx-auto text-hairline mb-4"/>
                    <h1 className="font-display text-2xl font-semibold text-ink mb-2">Article introuvable</h1>
                    <p className="text-muted mb-6">Cet article n'existe pas ou a été supprimé.</p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-paper font-medium rounded-md hover:bg-accent-dark transition-colors"
                    >
                        <ArrowLeft size={18}/>
                        <span>Retour au blog</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-paper text-ink font-sans">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-0.5 bg-hairline z-50">
                <div
                    className="h-full bg-accent transition-all duration-150"
                    style={{width: `${readingProgress}%`}}
                />
            </div>

            {/* Header */}
            <header className="bg-paper/90 border-b border-hairline sticky top-0 z-40 backdrop-blur-md">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
                        >
                            <ArrowLeft size={18}/>
                            <span className="font-medium">Retour au blog</span>
                        </Link>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => shareArticle('twitter')}
                                className="p-2 text-muted hover:text-accent transition-colors"
                                title="Partager sur Twitter"
                            >
                                <TwitterIcon size={18}/>
                            </button>
                            <button
                                onClick={() => shareArticle('linkedin')}
                                className="p-2 text-muted hover:text-accent transition-colors"
                                title="Partager sur LinkedIn"
                            >
                                <LinkedinIcon size={18}/>
                            </button>
                            <button
                                onClick={() => shareArticle('copy')}
                                className="p-2 text-muted hover:text-accent transition-colors"
                                title="Copier le lien"
                            >
                                {copiedLink ? <Check size={18} className="text-accent"/> : <Copy size={18}/>}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Article Header */}
                <header className="mb-12">
                    <div className="mb-6">
                        <span className="inline-block font-mono text-xs px-2.5 py-1 border border-hairline rounded-sm text-muted">
                            {getCategoryLabel(article.category)}
                        </span>
                    </div>

                    <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink mb-6 leading-tight">
                        {article.title}
                    </h1>

                    <p className="text-lg text-muted mb-8 leading-relaxed">
                        {article.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-5 font-mono text-xs text-muted mb-8">
                        <div className="flex items-center gap-1.5">
                            <User size={14}/>
                            <span>Gabin Bloquet</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Calendar size={14}/>
                            <span>{formatDate(article.publishDate)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock size={14}/>
                            <span>{article.readTime} de lecture</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Eye size={14}/>
                            <span>{article.views} vues</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Heart size={14}/>
                            <span>{article.likes} likes</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {article.tags.map((tag) => (
                            <span key={tag} className="font-mono text-xs px-2 py-1 border border-hairline rounded-sm text-muted">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <img
                        src={article.image}
                        alt={article.alt || article.title}
                        className="w-full h-64 md:h-80 object-cover rounded-md border border-hairline"
                    />
                </header>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink prose-headings:tracking-tight prose-h1:text-3xl prose-h1:mt-10 prose-h1:mb-6 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-ink/80 prose-p:leading-relaxed prose-p:mb-4 prose-a:text-accent prose-a:hover:text-accent-dark prose-strong:text-ink prose-blockquote:border-l-2 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted prose-ul:list-disc prose-ul:ml-6 prose-li:mb-1 prose-code:font-mono prose-img:rounded-md prose-img:border prose-img:border-hairline prose-img:my-6">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {article.content}
                    </ReactMarkdown>
                </div>

                {/* Article Footer */}
                <footer className="mt-16 pt-8 border-t border-hairline">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-muted hover:text-accent transition-colors">
                                <Heart size={18}/>
                                <span>{article.likes}</span>
                            </button>
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-muted hover:text-accent transition-colors">
                                <MessageCircle size={18}/>
                                <span>Commenter</span>
                            </button>
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-muted hover:text-accent transition-colors">
                                <Share2 size={18}/>
                                <span>Partager</span>
                            </button>
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div className="bg-white border border-hairline rounded-md p-6">
                        <div className="flex items-start gap-4">
                            <div
                                className="w-14 h-14 bg-ink rounded-md flex items-center justify-center text-paper font-display font-semibold text-lg shrink-0">
                                GB
                            </div>
                            <div className="flex-1">
                                <h3 className="font-display text-lg font-semibold text-ink mb-2">Gabin Bloquet</h3>
                                <p className="text-muted mb-4 leading-relaxed">
                                    CTO & Architecte — produits SaaS augmentés par l'IA.
                                    Je partage mes retours d'expérience sur l'architecture,
                                    le craft et l'IA en production.
                                </p>
                                <div className="flex gap-5">
                                    <Link
                                        to="/"
                                        className="text-accent hover:text-accent-dark font-medium transition-colors"
                                    >
                                        Voir mon profil
                                    </Link>
                                    <Link
                                        to="/#contact"
                                        className="text-accent hover:text-accent-dark font-medium transition-colors"
                                    >
                                        Réserver un échange
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
                    className="fixed bottom-8 right-8 w-11 h-11 bg-ink text-paper rounded-md hover:bg-accent transition-colors z-40"
                    aria-label="Revenir en haut"
                >
                    <ChevronUp size={20} className="mx-auto"/>
                </button>
            )}
        </div>
    );
};

export default Article;

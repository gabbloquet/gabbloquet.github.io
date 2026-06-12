import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, Search, Tag } from 'lucide-react';
import { ArticleService } from './articleService.js';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('tous');
    const [searchTerm, setSearchTerm] = useState('');

    const allArticles = ArticleService.getAllArticles();

    const categories = [
        { id: 'tous', label: 'Tous les articles' },
        { id: 'agilite', label: 'Agilité' },
        { id: 'developpement', label: 'Développement' },
        { id: 'general', label: 'Général' }
    ];

    const filteredArticles = allArticles.filter(article => {
        const matchesCategory = activeCategory === 'tous' || article.category === activeCategory;
        const matchesSearch = searchTerm === '' ||
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const featuredArticle = allArticles.find(article => article.featured);

    const getCategoryLabel = (category: string) => {
        const labels: Record<string, string> = {
            agilite: 'Agilité',
            developpement: 'Développement',
            general: 'Général'
        };
        return labels[category] || 'Général';
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-paper text-ink font-sans">
            {/* Header */}
            <header className="bg-paper/90 border-b border-hairline sticky top-0 z-40 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
                        >
                            <ArrowLeft size={18} />
                            <span className="font-medium">Retour au site</span>
                        </Link>
                        <div className="flex items-center gap-2">
                            <BookOpen size={20} className="text-accent" />
                            <span className="font-display text-lg font-semibold text-ink">Blog</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <p className="font-mono text-sm text-accent mb-3">// blog</p>
                    <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-ink mb-6">
                        Articles & Réflexions
                    </h1>
                    <p className="text-lg text-muted leading-relaxed max-w-2xl mb-10">
                        Mes découvertes, retours d'expérience et réflexions sur l'agilité,
                        le craftsmanship et le développement logiciel.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mb-8">
                        <div className="relative">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                            <input
                                type="text"
                                placeholder="Rechercher un article..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-white border border-hairline rounded-md focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    activeCategory === category.id
                                        ? 'bg-ink text-paper'
                                        : 'bg-white text-muted border border-hairline hover:text-ink'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            {featuredArticle && activeCategory === 'tous' && searchTerm === '' && (
                <section className="px-4 sm:px-6 lg:px-8 mb-16">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-mono text-sm text-accent mb-6">// à la une</h2>
                        <Link to={`/blog/${featuredArticle.id}`} className="block group">
                            <div className="bg-white border border-hairline rounded-md overflow-hidden hover:border-accent transition-colors">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="relative h-64 md:h-auto">
                                        <img
                                            src={featuredArticle.image}
                                            alt={featuredArticle.alt || featuredArticle.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col justify-center">
                                        <span className="inline-block w-fit font-mono text-xs px-2.5 py-1 border border-hairline rounded-sm text-muted mb-4">
                                            {getCategoryLabel(featuredArticle.category)}
                                        </span>
                                        <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-4 group-hover:text-accent transition-colors">
                                            {featuredArticle.title}
                                        </h3>
                                        <p className="text-muted mb-6 line-clamp-3 leading-relaxed">
                                            {featuredArticle.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 font-mono text-xs text-muted mb-6">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={13} />
                                                <span>{formatDate(featuredArticle.publishDate)}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock size={13} />
                                                <span>{featuredArticle.readTime}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-accent font-medium gap-2">
                                            <span>Lire l'article</span>
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Articles Grid */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-6xl mx-auto">
                    {filteredArticles.length > 0 ? (
                        <>
                            <h2 className="font-mono text-sm text-accent mb-6">
                                // {activeCategory === 'tous' ? 'tous les articles' : categories.find(c => c.id === activeCategory)?.label.toLowerCase()}{' '}
                                <span className="text-muted">({filteredArticles.length})</span>
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredArticles.map((article) => (
                                    <Link
                                        key={article.id}
                                        to={`/blog/${article.id}`}
                                        className="group bg-white border border-hairline rounded-md overflow-hidden hover:border-accent transition-colors"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={article.image}
                                                alt={article.alt || article.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <span className="absolute top-4 left-4 font-mono text-xs px-2.5 py-1 bg-paper/90 border border-hairline rounded-sm text-ink">
                                                {getCategoryLabel(article.category)}
                                            </span>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-display text-xl font-semibold text-ink mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-muted mb-4 line-clamp-2 leading-relaxed">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center gap-4 font-mono text-xs text-muted mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={13} />
                                                    <span>{formatDate(article.publishDate)}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock size={13} />
                                                    <span>{article.readTime}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {article.tags.slice(0, 3).map((tag: string) => (
                                                    <span key={tag} className="inline-flex items-center gap-1 font-mono text-xs px-2 py-1 border border-hairline rounded-sm text-muted">
                                                        <Tag size={10} />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <BookOpen size={48} className="mx-auto text-hairline mb-4" />
                            <h3 className="font-display text-xl font-semibold text-ink mb-2">Aucun article trouvé</h3>
                            <p className="text-muted mb-6">
                                Essayez de modifier votre recherche ou de changer de catégorie.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setActiveCategory('tous');
                                }}
                                className="px-6 py-3 bg-accent text-paper font-medium rounded-md hover:bg-accent-dark transition-colors"
                            >
                                Voir tous les articles
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blog;

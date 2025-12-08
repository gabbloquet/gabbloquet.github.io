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

    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            agilite: 'from-green-500 to-emerald-500',
            developpement: 'from-blue-500 to-cyan-500',
            general: 'from-purple-500 to-violet-500'
        };
        return colors[category] || 'from-gray-500 to-gray-600';
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur-md bg-white/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Retour au site</span>
                        </Link>
                        <div className="flex items-center space-x-2">
                            <BookOpen size={24} className="text-blue-600" />
                            <span className="text-xl font-bold text-gray-900">Blog</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Articles & Réflexions
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Mes découvertes, retours d'expérience et réflexions sur l'agilité, le craftsmanship et le développement logiciel.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto mb-8">
                        <div className="relative">
                            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Rechercher un article..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                                    activeCategory === category.id
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
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
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                            Article à la une
                        </h2>
                        <Link to={`/blog/${featuredArticle.id}`} className="block group">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="relative h-64 md:h-auto">
                                        <img
                                            src={featuredArticle.image}
                                            alt={featuredArticle.alt || featuredArticle.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r" />
                                    </div>
                                    <div className="p-8 flex flex-col justify-center">
                                        <span className={`inline-block w-fit px-4 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${getCategoryColor(featuredArticle.category)} mb-4`}>
                                            {featuredArticle.category === 'agilite' ? 'Agilité' :
                                                featuredArticle.category === 'developpement' ? 'Développement' : 'Général'}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                            {featuredArticle.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 line-clamp-3">
                                            {featuredArticle.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{formatDate(featuredArticle.publishDate)}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock size={14} />
                                                <span>{featuredArticle.readTime}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
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
                <div className="max-w-7xl mx-auto">
                    {filteredArticles.length > 0 ? (
                        <>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
                                {activeCategory === 'tous' ? 'Tous les articles' : categories.find(c => c.id === activeCategory)?.label}
                                <span className="text-gray-400 font-normal text-lg">({filteredArticles.length})</span>
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredArticles.map((article) => (
                                    <Link
                                        key={article.id}
                                        to={`/blog/${article.id}`}
                                        className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={article.image}
                                                alt={article.alt || article.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                            <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium text-white rounded-full bg-gradient-to-r ${getCategoryColor(article.category)}`}>
                                                {article.category === 'agilite' ? 'Agilité' :
                                                    article.category === 'developpement' ? 'Développement' : 'Général'}
                                            </span>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 line-clamp-2">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={14} />
                                                    <span>{formatDate(article.publishDate)}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock size={14} />
                                                    <span>{article.readTime}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {article.tags.slice(0, 3).map((tag: string) => (
                                                    <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
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
                            <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun article trouvé</h3>
                            <p className="text-gray-600 mb-6">
                                Essayez de modifier votre recherche ou de changer de catégorie.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setActiveCategory('tous');
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all"
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
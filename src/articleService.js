import { articles } from './articles/index.js';

export class ArticleService {

    static formatArticleForBlog(article) {
        return {
            id: article.id,
            title: article.name,
            excerpt: this.generateExcerpt(article.content),
            content: article.content,
            category: this.inferCategory(article.name),
            tags: this.generateTags(article.name, article.content),
            readTime: this.calculateReadTime(article.content),
            publishDate: this.getPublishDate(article.id),
            image: article.image,
            alt: article.alt,
            featured: article.id === 1, // Premier article en featured
            views: this.generateViews(article.id),
            likes: this.generateLikes(article.id)
        };
    }

    // Génère un extrait à partir du contenu
    static generateExcerpt(content) {
        // Trouve le premier paragraphe significatif
        const lines = content.split('\n').filter(line => line.trim() !== '');
        for (let line of lines) {
            if (!line.startsWith('#') && !line.startsWith('```') && line.length > 50) {
                return line.substring(0, 150) + '...';
            }
        }
        return 'Découvrez cet article passionnant sur le développement et l\'agilité...';
    }

    // Infère la catégorie à partir du titre
    static inferCategory(title) {
        const titleLower = title.toLowerCase();
        if (titleLower.includes('agile') || titleLower.includes('équipe') || titleLower.includes('scrum')) {
            return 'agilite';
        }
        if (titleLower.includes('code') || titleLower.includes('développement') || titleLower.includes('programmation')) {
            return 'developpement';
        }
        return 'general';
    }

    // Génère des tags à partir du titre et du contenu
    static generateTags(title, content) {
        const tags = [];
        const text = (title + ' ' + content).toLowerCase();

        // Tags basés sur les mots-clés
        if (text.includes('agile')) tags.push('Agile');
        if (text.includes('scrum')) tags.push('Scrum');
        if (text.includes('équipe')) tags.push('Équipe');
        if (text.includes('développement')) tags.push('Développement');
        if (text.includes('code')) tags.push('Code');
        if (text.includes('javascript')) tags.push('JavaScript');
        if (text.includes('manifeste')) tags.push('Manifeste');
        if (text.includes('valeurs')) tags.push('Valeurs');
        if (text.includes('principes')) tags.push('Principes');
        if (text.includes('collaboration')) tags.push('Collaboration');

        return tags.slice(0, 4); // Maximum 4 tags
    }

    // Calcule le temps de lecture estimé
    static calculateReadTime(content) {
        const wordsPerMinute = 200;
        const wordCount = content.split(/\s+/).length;
        const minutes = Math.ceil(wordCount / wordsPerMinute);
        return `${minutes} min`;
    }

    // Génère une date de publication basée sur l'ID
    static getPublishDate(id) {
        const baseDates = {
            1: '2021-11-01',
            2: '2021-12-15',
            3: '2022-01-05',
            4: '2022-02-10'
        };
        return baseDates[id] || '2021-01-01';
    }

    // Génère un nombre de vues simulé
    static generateViews(id) {
        const baseViews = {
            1: 1547,
            2: 1203,
            3: 987,
            4: 756
        };
        return baseViews[id] || Math.floor(Math.random() * 1000) + 500;
    }

    // Génère un nombre de likes simulé
    static generateLikes(id) {
        const baseLikes = {
            1: 89,
            2: 67,
            3: 54,
            4: 43
        };
        return baseLikes[id] || Math.floor(Math.random() * 50) + 20;
    }

    // Récupère tous les articles formatés
    static getAllArticles() {
        return articles.map(article => this.formatArticleForBlog(article));
    }

    // Récupère un article par ID
    static getArticleById(id) {
        const article = articles.find(a => a.id === parseInt(id));
        return article ? this.formatArticleForBlog(article) : null;
    }

    // Récupère les articles par catégorie
    static getArticlesByCategory(category) {
        return this.getAllArticles().filter(article =>
            category === 'tous' || article.category === category
        );
    }

    // Recherche dans les articles
    static searchArticles(searchTerm) {
        const term = searchTerm.toLowerCase();
        return this.getAllArticles().filter(article =>
            article.title.toLowerCase().includes(term) ||
            article.excerpt.toLowerCase().includes(term) ||
            article.tags.some(tag => tag.toLowerCase().includes(term))
        );
    }
}
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, Eye, Calendar } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import TableOfContents from './TableOfContents';
import RelatedLinks from './RelatedLinks';
import FAQSection from './FAQSection';

interface ArticleLayoutProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  featuredImage: string;
  readTime: string;
  views?: string;
  publishDate?: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  tocSections: Array<{ id: string; title: string }>;
  relatedLinks: Array<{ title: string; description: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
  children: React.ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  featuredImage,
  readTime,
  views,
  publishDate,
  breadcrumbs,
  tocSections,
  relatedLinks,
  faqs,
  children
}) => {
  return (
    <>
      <Helmet>
        <title>{title} - Viaja Mejor</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={featuredImage} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": featuredImage,
            "author": {
              "@type": "Person",
              "name": "Viaja Mejor"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Viaja Mejor",
              "logo": {
                "@type": "ImageObject",
                "url": "https://viajamejor.net/apple-touch-icon.png"
              }
            },
            "datePublished": publishDate || "2024-01-15",
            "dateModified": "2024-12-01"
          })}
        </script>
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 py-4 pt-20">
        <Breadcrumbs items={breadcrumbs} />
        
        {/* Featured Image */}
        <div className="relative h-32 sm:h-48 lg:h-64 rounded-lg overflow-hidden mb-4">
          <img 
            src={featuredImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        <header className="mb-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            {title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
            <span className="flex items-center bg-gray-100 px-2 py-0.5 rounded-full">
              <Clock className="h-3 w-3 mr-1" />
              {readTime} lectura
            </span>
            {views && (
              <span className="hidden sm:flex items-center bg-gray-100 px-2 py-0.5 rounded-full">
                <Eye className="h-3 w-3 mr-1" />
                {views} vistas
              </span>
            )}
            {publishDate && (
              <span className="hidden sm:flex items-center bg-gray-100 px-2 py-0.5 rounded-full">
                <Calendar className="h-3 w-3 mr-1" />
                {publishDate}
              </span>
            )}
          </div>
        </header>

        <TableOfContents sections={tocSections} />

        <div className="prose prose-sm sm:prose-base max-w-none">
          {children}
        </div>

        <RelatedLinks links={relatedLinks} title="Continúa ahorrando en tu viaje" />
        
        <FAQSection faqs={faqs} />
      </article>
    </>
  );
};

export default ArticleLayout;
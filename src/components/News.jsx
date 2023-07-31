import React from 'react'
import NewsItem from './NewsItem'
import novedades from '../data/Novedades.json'

const News = () => {

    console.log(novedades);
    const renderedNews = novedades.map(novedad => {
        return (
            <NewsItem
                key={novedad.id}
                title={novedad.title}
                description={novedad.description}>
            </NewsItem>
        );
    })

    return (
        <div>
            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom text-white">NOVEDADES</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    {renderedNews}
                </div>
            </div>
        </div>
    )
}

export default News

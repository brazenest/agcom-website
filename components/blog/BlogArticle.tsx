"use client";
import { ArticleSlugT, ArticleTitleT, ArticleExcerptT, ArticleDateT, ArticleReadtimeT, ArticleBodyT } from "@/types/blog";
import { format } from "date-fns";
import Markdown from 'react-markdown';
import FlowReactiveBackground from "../layouts/FlowReactiveBackground";
import PageSection from "../layouts/PageSection";

export const BlogArticle = ({ title, subtitle, slug, excerpt, datePublished, readtime, body }: ArticlePropsT) => {

    const date = new Date(datePublished)
    const articleDate = date.toISOString().split('T')[0]
    const formattedDate = format(new Date(articleDate), "MMMM d, yyyy")
    const readtimeString = `${readtime} minute read`

    return (
            <article className="relative min-h-screen overflow-hidden">
      {/* Scroll-reactive cinematic gradient */}
      <FlowReactiveBackground variant="hybrid" />

      {/* Hero section */}
      <header className="relative z-10 text-center px-6 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-space-grotesk text-5xl md:text-6xl font-bold text-[var(--color-text)] mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="font-inter text-lg text-[var(--color-subtext)] mb-6">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--color-subtext)]">
            {/* {author && <span>By {author}</span>} */}
            {/* {category && <span className="uppercase tracking-wide">{category}</span>} */}
            {formattedDate && (
              <span>{formattedDate}</span>
            )}
          </div>
        </div>
      </header>

      {/* Article body */}
      <PageSection className="relative z-10 bg-[var(--color-bg-section)] py-16">
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert font-inter leading-relaxed content">
          <Markdown>{body}</Markdown>
        </div>
      </PageSection>

      {/* Footer gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent pointer-events-none" />
    </article>
    )
}

type ArticlePropsT = {
    // id: BlogArticleIdT,
    slug: ArticleSlugT,
    title: ArticleTitleT,
    subtitle?: string,
    excerpt: ArticleExcerptT,
    datePublished: ArticleDateT,
    // tags: ArticleTagT[],
    // author: ArticleAuthorT,
    readtime: ArticleReadtimeT
    body: ArticleBodyT,
}

"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/MotionWrapper";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { ArticleT } from "@/types/article";
import { getArticles } from "@/functions/getArticles";
import { formatDate } from "@/functions/formatDate";
import { Button } from "@/components/ui/Button";

const articles: ArticleT[] = (await getArticles({ params: ({ limit: '3' }) }))
  .map(article => ({
    ...article,
    date: formatDate(article.date, "MMMM YYYY"),
    href: `/blog/articles/${article.slug}`,
  }));

export default function HomeBlogSection() {
  return (
    <main id="blog">
      <Section>
        <FadeIn>
          <Heading level={2} className="text-center mb-16">Latest Articles</Heading>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((a, i) => (
            <FadeIn key={a.href} delay={i * 0.15}>
              <Card className="hover:shadow-md transition-all duration-300">
                <Link href={a.href} className="block group">
                  <div className="text-xs flex justify-between text-text-secondary dark:text-dark-text-secondary mb-4">
                    <span className="capitalize">{a.date}</span>
                  </div>

                  <h3 className="font-cinematic text-xl mb-2 group-hover:text-brand-500 dark:group-hover:text-dark-brand-500">
                    {a.title}
                  </h3>

                  <p className="font-engineering text-text-secondary dark:text-dark-text-secondary">
                    {a.excerpt}
                  </p>
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-16 flex justify-center">
          <Button asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </FadeIn>
      </Section>
    </main>
  );
}

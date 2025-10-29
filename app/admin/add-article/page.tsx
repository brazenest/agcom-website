'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { calculateReadtime } from '@/app/lib/functions/calculate-readtime';
import { DateSelector } from '@/app/lib/components/date-selector';
import { queryApi } from '@/app/lib/functions/query-api';

const ContentEditor = dynamic(() => import('@/app/lib/components/content-editor'), {
  ssr: false,
});

export default function BlogAdminAddArticlePage() {
  const [articleSlug, setArticleSlug] = useState('')
  const [articleSlugIsVirgin, setArticleSlugIsVirgin] = useState(true)
  const [articleTitle, setArticleTitle] = useState('')
  const [articleExcerpt, setArticleExcerpt] = useState('')
  const [articleAuthor, setArticleAuthor] = useState(1)
  const [articleTags, setArticleTags] = useState([])
  const [articleDatePublished, setArticleDatePublished] = useState(new Date())
  const [articleBody, setArticleBody] = useState('')

  const handleChangeArticleTitle = (ev) => {
    if (articleSlugIsVirgin) {
      setArticleSlug(ev.target.value
        .replace(/'/g, '')
        .replace(/[^a-zA-Z0-9]/g, '-')
        .replace(/-{2,}/g, '-')
        .replace(/[-]$/, '')
        .toLowerCase()
      )
    }
    setArticleTitle(ev.target.value)
  }
  const handleChangeArticleSlug = (ev) => setArticleSlug(ev.target.value)
  const handleChangeArticleExcerpt = (ev) => setArticleExcerpt(ev.target.value)
  const handleChangeArticleDatePublished = (date: string) => setArticleDatePublished(date)
  const handleChangeArticleAuthor = (ev) => setArticleAuthor(parseInt(ev.target.value))

  const handleFormSubmit = (ev) => ev.preventDefault()

  const handleClickSubmit = async () => {
    console.log('Admin | BlogAdminAddArticlePage(): Submitting article / handleClickSubmit() running...')
    const data = {
      slug: articleSlug,
      title: articleTitle,
      excerpt: articleExcerpt,
      datePublished: articleDatePublished.toISOString().split('T')[0],
      tags: articleTags,
      author: articleAuthor,
      readtime: calculateReadtime(articleBody),
      body: articleBody,
    }
    console.log('Admin | BlogAdminAddArticlePage(): Submitting article data |-|', data)
    const queryResponse = await queryApi({ endpoint: 'articles', method: 'POST', data })
    if (!queryResponse.ok) {
      console.log('Admin | BlogAdminAddArticlePage(): API response not-ok for adding article |-|', queryResponse.message)
      return
    }

    console.log('Admin | BlogAdminAddArticlePage(): Article added successfully! |-|', queryResponse.data)

    // Reset form
    setArticleSlug('')
    setArticleSlugIsVirgin(true)
    setArticleTitle('')
    setArticleExcerpt('')
    setArticleDatePublished(new Date())
    setArticleTags([])
    setArticleAuthor(-1)
    setArticleBody('')

    // Focus title input after submission
    document.getElementById('blog-admin-add-article-form-input--title')!.focus()
  }

  return (
    <div className="max-w-4xl mx-auto">

      <form id="blog-admin-add-article-form" onSubmit={(event) => handleFormSubmit(event)}>
        <div className="max-w-xl my-5 justify-between items-center">
          <h2 className="col-span-4 text-2xl font-bold mb-7">Add an article</h2>
          <span className="grid grid-cols-4 grid-rows-1 my-6 items-center">
            <label htmlFor="title">Title</label>
            <input
              id="blog-admin-add-article-form-input--title"
              type="text"
              name="title"
              size={54}
              tabIndex={1}
              className="col-span-3 p-4 border rounded"
              value={articleTitle}
              onChange={handleChangeArticleTitle}
              autoFocus
            />
          </span>
          <span className="grid grid-cols-4 grid-rows-1 my-6 items-center">
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              name="slug"
              size={54}
              tabIndex={2}
              className="col-span-3 p-4 border rounded"
              value={articleSlug}
              onChange={handleChangeArticleSlug}
              onFocus={() => setArticleSlugIsVirgin(false)}
            />
          </span>
          <span className="grid grid-cols-4 grid-rows-1 my-6 items-center">
            <label htmlFor="excerpt">Excerpt</label>
            <textarea
              name="excerpt"
              rows={4}
              cols={54}
              tabIndex={3}
              className="col-span-3 p-4 border rounded"
              value={articleExcerpt}
              onChange={handleChangeArticleExcerpt}
            />
          </span>
          <span className="grid grid-cols-4 grid-rows-1 my-6 items-center">
            <label htmlFor="datePublished">Date Published</label>
            <DateSelector
              value={articleDatePublished}
              handleChange={handleChangeArticleDatePublished}
            />
          </span>
          <span className="grid grid-cols-4 grid-rows-1 my-6 items-center">
            <label htmlFor="author">Author ID</label>
            <input
              type="text"
              name="author"
              size={10}
              tabIndex={5}
              className="col-span-1 p-4 border rounded"
              value={articleAuthor}
              onChange={handleChangeArticleAuthor}
            />
          </span>
        </div>
        <ContentEditor
          content={articleBody}
          handleChange={setArticleBody}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-5 py-2 px-4 rounded"
          onClick={handleClickSubmit}>
          Submit article
        </button>
      </form>

      <h2 className="text-lg">Usage notes</h2>
      <ul className="list-disc list-inside">
        <li>For an initial article, as you type into the title field, the slug field will automatically generate an acceptable slug for your article. The autogeneration will cease permanently upon your placing focus on the slug field.</li>
      </ul>

    </div>
  );
}
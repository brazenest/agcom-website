'use client'
import ContentEditor from '@/app/lib/components/content-editor';
import { useState } from 'react';

export default function BlogAdminPage() {
  const [articleTitle, setArticleTitle] = useState('')
  const [articleSlug, setArticleSlug] = useState('')
  const [articleBody, setArticleBody] = useState('')
  const [articleSlugIsVirgin, setArticleSlugIsVirgin] = useState(true)

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

  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  const handleClickSubmit = async ({ currentEditorRef }) => {

    const bodyContent = currentEditorRef.getContent()
    setArticleBody(bodyContent)

    let datePublished = new Date(Date.now());
    const offset = datePublished.getTimezoneOffset();
    datePublished = new Date(datePublished.getTime() + (offset*60*1000));
    const articleDatePublished = datePublished.toISOString().split('T')[0]

    const data = {
      title: articleTitle,
      slug: articleSlug,
      body: articleBody,
      datePublished: articleDatePublished,
    }

    const response = await fetch('https://stunning-guide-grjrr7659p439wwx-3000.app.github.dev/api/articles/',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          // "Content-Type": "application/x-www-form-urlencoded",
          // "Content-Type": "multipart/form-data",
        },
      }
    )
    const result = await response.json()
    if (!result.ok) {
      throw new Error('BlogAdminPage(): API response not-ok for adding article')
    }

    setArticleTitle('')
    setArticleSlug('')
    setArticleSlugIsVirgin(true)
    currentEditorRef.setContent('')
    setArticleBody('')

    document.getElementById('article-title')!.focus()
  }
  
  return (
    <div className="max-w-4xl mx-auto">

      <form id="blog-admin-add-article-form" onSubmit={(event) => handleFormSubmit(event)}>
        <div className="justify-between my-5 items-center">
          <h2 className="text-2xl font-bold mb-4">Add an article</h2>
          <span className="flex space-x-5 items-center my-2">
            <label htmlFor="article-title">Title</label>
            <input type="text" name="title" size={54} tabIndex={1} className="border rounded p-3" value={articleTitle} onChange={handleChangeArticleTitle} autoFocus />
          </span>
          <span className="flex space-x-5 items-center my-2">
            <label htmlFor="article-slug">Slug</label>
            <input type="text" name="slug" size={54} tabIndex={2} className="border rounded p-3" value={articleSlug} onChange={handleChangeArticleSlug} onFocus={() => setArticleSlugIsVirgin(false)} />
          </span>
        </div>
        <ContentEditor tabIndex={3} handleClickSubmit={handleClickSubmit} submitButtonText="Publish This Article" />
      </form>

      <h2 className="text-lg">Usage notes</h2>
      <ul className="list-disc list-inside">
        <li>For an initial article, as you type into the title field, the slug field will automatically generate an acceptable slug for your article. The autogeneration will cease permanently upon your placing focus on the slug field.</li>
      </ul>

    </div>
  );
}
'use client'
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function ContentEditor({
  initialContent = '',
  tabIndex = 1,
  handleClickSubmit,
  submitButtonText = 'Submit'
}: ContentEditorProps) {
  const editorRef = useRef(null);

  return (
    <div className="content-editor-wrap">
      <Editor
        apiKey='6ym5ldwv9uy0traqkx9a10yv0bme463w24q7xj1nacrasnx4'
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue={initialContent}
        tabIndex={tabIndex}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <div className="content-editor-bottom-button-bar">
        <button className="bg-blue-500 text-white p-2 rounded-lg m-4" type="submit" onClick={
          () => handleClickSubmit({ currentEditorRef: editorRef.current! })
          }>{submitButtonText}</button>
        </div>
    </div>
  )
}

type ContentEditorProps = {
  initialContent?: string,
  tabIndex?: number,
  handleClickSubmit: (Object) => void,
  submitButtonText: string,
}

import { useState } from "react";
import { BlogArticleTagT } from "../types/blog";

const ReactTags = require('react-tag-input').WithOutContext;

const SEPARATORS = ["Enter", "Comma", "Tab"]
const EXISTING_TAGS: BlogArticleTagT[] = []

const suggestions = EXISTING_TAGS

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const TagInput = () => {
  const [tags, setTags] = useState<BlogArticleTagT[]>([])

  const handleDelete = (index: number) => {
    setTags(tags.filter((_: any, i: number) => i !== index));
  };

  const onTagUpdate = (index: number, newTag: BlogArticleTagT) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1, newTag);
    setTags(updatedTags);
  };

  const handleAddition = (tag: BlogArticleTagT) => {
    setTags((prevTags) => {
      return [...prevTags, tag];
    });
  };

  const handleDrag = (tag: BlogArticleTagT, currPos: number, newPos: number) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index: number) => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  const onClearAll = () => {
    setTags([]);
  };

  return (
    <div className="app">

      <h1> React Tags Example </h1>
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          // separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          onTagUpdate={onTagUpdate}
          inputFieldPosition="bottom"
          editable
          clearAll
          onClearAll={onClearAll}
          maxTags={7}
        />
      </div>
    </div>
  );
};

'use client';

import { forwardRef, useImperativeHandle, useState } from 'react';

export default forwardRef(function PostTitle(_, ref) {
  const [title, setTitle] = useState<string>('');

  useImperativeHandle(
    ref,
    () => {
      return title;
    },
    [title]
  );

  return (
    <fieldset className="flex flex-col space-y-2 text-">
      <label htmlFor="title">제목</label>
      <input
        id="title"
        type="text"
        className="w-ful p-2 border rounded-md"
        placeholder="제목"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
    </fieldset>
  );
});

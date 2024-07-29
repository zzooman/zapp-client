import { forwardRef, useImperativeHandle, useState } from 'react';

export default forwardRef(function PostContent(_, ref) {
  const [content, setContent] = useState<string>('');
  useImperativeHandle(
    ref,
    () => {
      return content;
    },
    [content]
  );

  return (
    <fieldset className="flex flex-col space-y-2">
      <label htmlFor="content">자세한 설명</label>
      <textarea
        id="content"
        className="w-full h-48 p-2 border rounded-md"
        placeholder="상품 설명을 입력해주세요."
        onChange={e => setContent(e.target.value)}
      />
    </fieldset>
  );
});

import { forwardRef, useImperativeHandle, useState } from 'react';

export default forwardRef(function GoodsDescription(_, ref) {
  const [description, setDescription] = useState<string>('');
  useImperativeHandle(
    ref,
    () => {
      return description;
    },
    [description]
  );

  return (
    <fieldset className="flex flex-col space-y-2">
      <label htmlFor="goodsDescription">자세한 설명</label>
      <textarea
        id="goodsDescription"
        className="w-full h-48 p-2 border rounded-md"
        placeholder="상품 설명을 입력해주세요."
        onChange={e => setDescription(e.target.value)}
      />
    </fieldset>
  );
});

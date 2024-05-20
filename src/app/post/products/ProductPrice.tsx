'use client';

import { forwardRef, useImperativeHandle, useState } from 'react';

export default forwardRef(function ProductPrice(_, ref) {
  const [price, setPrice] = useState<string>('');
  useImperativeHandle(
    ref,
    () => {
      return price;
    },
    [price]
  );
  return (
    <fieldset className="flex flex-col space-y-2">
      <label htmlFor="price">가격</label>
      <input
        id="price"
        type="text"
        inputMode="numeric"
        className="w-ful p-2 border rounded-md"
        placeholder="가격을 입력해주세요."
        onChange={e => setPrice(e.target.value)}
        value={price}
      />
    </fieldset>
  );
});

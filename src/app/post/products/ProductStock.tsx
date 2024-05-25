'use client';

import { forwardRef, useImperativeHandle, useState } from 'react';

export default forwardRef(function ProductStock(_, ref) {
  const [stock, setStock] = useState<number>(1);
  useImperativeHandle(
    ref,
    () => {
      return stock;
    },
    [stock]
  );
  return (
    <fieldset className="flex flex-col space-y-2">
      <label htmlFor="stock">수량</label>
      <input
        id="stock"
        type="number"
        className="w-ful p-2 border rounded-md"
        placeholder="재고"
        onChange={e => setStock(Number(e.target.value))}
        value={stock}
      />
    </fieldset>
  );
});

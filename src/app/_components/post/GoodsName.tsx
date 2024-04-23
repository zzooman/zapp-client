'use client';
export default function GoodsTitle() {
  return (
    <fieldset className="flex flex-col space-y-2">
      <label htmlFor="goodsTitle">제목</label>
      <input id="goodsTitle" type="text" className="w-ful p-2 border rounded-md" placeholder="제목" />
    </fieldset>
  );
}

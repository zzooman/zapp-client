'use client';
export default function GoodsPrice() {
  return (
    <fieldset className="flex flex-col space-y-2">
      <label htmlFor="goodsPrice">가격</label>
      <input id="goodsPrice" type="number" className="w-ful p-2 border rounded-md" placeholder="가격을 입력해주세요." />
    </fieldset>
  );
}

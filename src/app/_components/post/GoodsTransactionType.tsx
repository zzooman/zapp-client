export default function TransactionType() {
  return (
    <fieldset className="flex flex-col space-y-2">
      <legend>거래 방식</legend>
      <div className="flex gap-3">
        <input type="radio" id="direct" name="drone" value="direct" hidden />
        <label htmlFor="direct" className="bg-white py-1 px-2 rounded-md text-sm text-slate-900">
          직거래
        </label>

        <input type="radio" id="quick" name="drone" value="quick" hidden />
        <label htmlFor="direct" className="border py-1 px-2 rounded-md text-sm">
          배송
        </label>
      </div>
    </fieldset>
  );
}

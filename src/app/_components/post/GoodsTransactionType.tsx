import { forwardRef, useImperativeHandle, useState } from 'react';

export default forwardRef(function TransactionType(_, ref) {
  const [transactionType, setTransactionType] = useState<'' | 'direct' | 'shipping'>('');
  useImperativeHandle(
    ref,
    () => {
      return transactionType;
    },
    [transactionType]
  );

  return (
    <fieldset className="flex flex-col space-y-2">
      <legend>거래 방식</legend>
      <div className="flex gap-3">
        <input
          type="radio"
          id="direct"
          name="drone"
          value="direct"
          hidden
          checked={transactionType === 'direct'}
          onChange={() => setTransactionType('direct')}
        />
        <label
          htmlFor="direct"
          className={`py-1 px-2 rounded-md text-sm ${
            transactionType === 'direct' ? 'bg-point-400 font-bold' : 'border'
          }`}
        >
          직거래
        </label>
        <input
          type="radio"
          id="shipping"
          name="drone"
          value="shipping"
          hidden
          checked={transactionType === 'shipping'}
          onChange={() => setTransactionType('shipping')}
        />
        <label
          htmlFor="shipping"
          className={`py-1 px-2 rounded-md text-sm ${
            transactionType === 'shipping' ? 'bg-point-400 font-bold' : 'border'
          }`}
        >
          배송
        </label>
      </div>
    </fieldset>
  );
});

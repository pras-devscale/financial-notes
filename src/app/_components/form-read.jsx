import API_URL from "@/constants/api-url";
import FormDelete from "./form-delete";
import FormUpdate from "./form-update";

export default async function FormRead() {
  const res = await fetch(API_URL);
  const { data } = await res.json();

  const allDebitData = data
    .filter((item) => item.category === "Debit")
    .reduce((acc, item) => acc + item.amount, 0);
  const allCreditData = data
    .filter((item) => item.category === "Credit")
    .reduce((acc, item) => acc + item.amount, 0);

  console.log(`Debit Data = ${allDebitData}`);
  console.log(`Credit Data = ${allCreditData}`);

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold mb-4">List of Notes</h1>
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 border border-gray-200 rounded items-center"
          >
            <h2 className="font-semibold text-sm p-2">{item.title}</h2>
            <p className="text-sm text-gray-500 border-l p-4">
              Rp. {item.amount}
            </p>
            {item.category === "Debit" ? (
              <p className="text-sm text-green-600 border-l p-4">
                {item.category}
              </p>
            ) : (
              <p className="text-sm text-red-600 border-l p-4">
                {item.category}
              </p>
            )}
            <div className="flex justify-end items-center p-2 space-x-2">
              <FormDelete id={item._id} />
              <FormUpdate
                title={item.title}
                amount={item.amount}
                category={item.category}
                id={item._id}
              />
            </div>
          </div>
        ))}
      </div>

      <section className="space-y-3">
        <h1 className="text-2xl font-bold">Summary</h1>
        <div className="grid grid-cols-3">
          <div className="border border-gray-200 rounded p-2 bg-green-200">
            <h2 className="text-sm font-semibold">Debit</h2>
            <p className="text-sm text-gray-500">Rp. {allDebitData}</p>
          </div>
          <div className="border border-gray-200 rounded p-2 bg-red-200">
            <h2 className="text-sm font-semibold">Credit</h2>
            <p className="text-sm text-gray-500">Rp. {allCreditData}</p>
          </div>
          <div className="border border-gray-200 rounded p-2 bg-yellow-200">
            <h2 className="text-sm font-semibold">Total</h2>
            <p className="text-sm text-gray-500">
              Rp. {allDebitData - allCreditData}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

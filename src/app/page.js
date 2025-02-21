import FormCreate from "./_components/form-create";
import FormRead from "./_components/form-read";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto space-y-8 mt-16">
      <h1 className="text-3xl font-bold">Financialku.</h1>
      <FormCreate />
      <FormRead />
    </div>
  );
}

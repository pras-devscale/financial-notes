import FormCreate from "./_components/form-create";
import FormRead from "./_components/form-read";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto space-y-8">
      <FormCreate />
      <FormRead />
    </div>
  );
}

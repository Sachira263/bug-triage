export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Bug Triage</h1>
      <p className="mt-2">
        <a href="/issues" className="text-blue-500 underline">
          Go to Issue List
        </a>
      </p>
    </div>
  );
}

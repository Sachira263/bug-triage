export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      <div className="w-full max-w-lg p-8 text-center bg-gray-800 shadow-2xl rounded-2xl">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
          🚀 Welcome to Bug Triage
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Manage, prioritize, and assign your issues effectively with our
          simple bug triage system.
        </p>

        <div className="mt-6">
          <a
            href="/issues"
            className="inline-block px-6 py-3 text-lg font-semibold text-white transition-transform duration-300 shadow-md rounded-xl bg-gradient-to-r from-blue-500 to-green-500 hover:scale-105 hover:from-blue-400 hover:to-green-400"
          >
            🔎 Go to Issue List
          </a>
        </div>
      </div>
    </div>
  );
}


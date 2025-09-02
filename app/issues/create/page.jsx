"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateIssuePage() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [area, setArea] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !area) {
      setError("Title and Area are required");
      return;
    }

    const res = await fetch("/api/issues", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, priority, area }),
    });

    if (res.ok) {
      router.push("/issues");
    } else {
      const data = await res.json();
      setError(data.error || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-lg rounded-2xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-yellow-400">
          ✨ Create New Issue
        </h1>

        {error && (
          <p className="mb-4 font-medium text-center text-red-400">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 text-white bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">
              Area
            </label>
            <input
              type="text"
              className="w-full p-3 text-white bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">
              Priority
            </label>
            <select
              className="w-full p-3 text-white bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="high">🔥 High</option>
              <option value="medium">⚡ Medium</option>
              <option value="low">🌱 Low</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400"
          >
            Create Issue 🚀
          </button>
        </form>
      </div>
    </div>
  );
}


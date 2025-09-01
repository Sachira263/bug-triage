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
      body: JSON.stringify({ title, priority, area })
    });

    if (res.ok) {
      router.push("/issues");
    } else {
      const data = await res.json();
      setError(data.error || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Create New Issue</h1>
      {error && <p className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            className="w-full p-2 border"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Area</label>
          <input
            type="text"
            className="w-full p-2 border"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Priority</label>
          <select
            className="w-full p-2 border"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <button type="submit" className="p-2 text-white bg-blue-500 rounded">
          Create
        </button>
      </form>
    </div>
  );
}

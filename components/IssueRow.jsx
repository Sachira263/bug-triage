"use client";

export default function IssueRow({ issue }) {
  return (
    <tr className="border-b">
      <td className="p-2">{issue.id}</td>
      <td className="p-2">{issue.title}</td>
      <td className="p-2">{issue.priority}</td>
      <td className="p-2">{issue.area}</td>
      <td className="p-2">{issue.status}</td>
      <td className="p-2">{issue.assignee || "-"}</td>
      <td className="p-2">{new Date(issue.createdAt).toLocaleString()}</td>
    </tr>
  );
}



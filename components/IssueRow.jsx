"use client";

export default function IssueRow({ issue, rowClass }) {
  return (
    <tr
      className={`${rowClass} hover:bg-gray-600 transition-colors duration-300 border-b`}
    >
      <td className="p-2">{issue.id}</td>
      <td className="p-2">{issue.title}</td>
      <td className="p-2">{issue.priority}</td>
      <td className="p-2">{issue.area}</td>
      <td className="p-2">{issue.status}</td>
      <td className="p-2">{issue.assignee}</td>
      <td className="p-2">{issue.createdAt}</td>
    </tr>
  );
}




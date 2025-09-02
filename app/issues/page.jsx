import IssueRow from '../../components/IssueRow';
import fs from 'fs';
import path from 'path';

const issuesFile = path.join(process.cwd(), 'data', 'issues.json');

async function getIssues() {
  const data = fs.readFileSync(issuesFile, 'utf-8');
  return JSON.parse(data);
}

export default async function IssuesPage() {
  const issues = await getIssues();

  return (
    <div className="min-h-screen p-6 bg-gray-900">
      <h1 className="mb-6 text-3xl font-bold text-yellow-400">Issue List</h1>

      <p className="mb-6">
        <a
          href="/issues/create"
          className="text-green-400 underline transition-colors duration-300 hover:text-green-200"
        >
          Create New Issue
        </a>
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-white border border-collapse border-gray-700 table-auto">
          <thead>
            <tr className="text-yellow-200 uppercase bg-indigo-700">
              <th className="p-3 border-b border-gray-600">ID</th>
              <th className="p-3 border-b border-gray-600">Title</th>
              <th className="p-3 border-b border-gray-600">Priority</th>
              <th className="p-3 border-b border-gray-600">Area</th>
              <th className="p-3 border-b border-gray-600">Status</th>
              <th className="p-3 border-b border-gray-600">Assignee</th>
              <th className="p-3 border-b border-gray-600">Created At</th>
            </tr>
          </thead>

          <tbody>
            {issues.map((issue, index) => (
              <IssueRow
                key={issue.id}
                issue={issue}
                rowClass={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}




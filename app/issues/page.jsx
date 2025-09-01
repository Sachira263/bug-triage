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
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Issue List</h1>
      <p className="mb-4">
        <a href="/issues/create" className="text-blue-500 underline">Create New Issue</a>
      </p>
      <table className="w-full border border-collapse border-gray-300 table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            
            <th className="p-2">Title</th>
            <th className="p-2">Priority</th>
            <th className="p-2">Area</th>
            <th className="p-2">Status</th>
            <th className="p-2">Assignee</th>
            <th className="p-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {issues.map(issue => (
            <IssueRow key={issue.id} issue={issue} />
          ))}
        </tbody>
      </table>
    </div>
  );
}



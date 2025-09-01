import fs from 'fs';
import path from 'path';

const issuesFile = path.join(process.cwd(), 'data', 'issues.json');

export async function POST(req) {
  const { assignee } = await req.json();

  const data = fs.readFileSync(issuesFile, 'utf-8');
  const issues = JSON.parse(data);

  const priorityOrder = { high: 1, medium: 2, low: 3 };
  const openIssues = issues.filter(i => i.status === 'open');
  openIssues.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority] || new Date(a.createdAt) - new Date(b.createdAt));

  if (openIssues.length === 0) {
    return new Response(JSON.stringify({ error: "No open issues found" }), { status: 404 });
  }

  const nextIssue = openIssues[0];
  nextIssue.status = 'in_progress';
  nextIssue.assignee = assignee;

  fs.writeFileSync(issuesFile, JSON.stringify(issues, null, 2));
  return new Response(JSON.stringify(nextIssue));
}

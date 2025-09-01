import fs from 'fs';
import path from 'path';

const issuesFile = path.join(process.cwd(), 'data', 'issues.json');

export async function PATCH(req, { params }) {
  const { id } = params;
  const body = await req.json();
  const { status } = body;

  const data = fs.readFileSync(issuesFile, 'utf-8');
  const issues = JSON.parse(data);
  const issue = issues.find(i => i.id === parseInt(id));

  if (!issue) return new Response(JSON.stringify({ error: "Issue not found" }), { status: 404 });

  const validTransitions = {
    open: ['in_progress', 'blocked'],
    in_progress: ['done', 'blocked'],
    blocked: ['in_progress']
  };

  if (!validTransitions[issue.status].includes(status)) {
    return new Response(JSON.stringify({ error: `Invalid status transition from ${issue.status} → ${status}` }), { status: 400 });
  }

  issue.status = status;
  fs.writeFileSync(issuesFile, JSON.stringify(issues, null, 2));
  return new Response(JSON.stringify(issue));
}

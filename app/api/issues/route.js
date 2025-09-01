import fs from "fs";
import path from "path";

const issuesFile = path.join(process.cwd(), "data", "issues.json");

export async function POST(req) {
  const { title, priority, area } = await req.json();

  if (!title || !area) {
    return new Response(JSON.stringify({ error: "Title and Area are required" }), { status: 400 });
  }

  const data = fs.readFileSync(issuesFile, "utf-8");
  const issues = JSON.parse(data);

  const newIssue = {
    id: issues.length ? issues[issues.length - 1].id + 1 : 1,
    title,
    priority: priority || "medium",
    area,
    status: "open",
    assignee: null,
    createdAt: new Date().toISOString(),
  };

  issues.push(newIssue);
  fs.writeFileSync(issuesFile, JSON.stringify(issues, null, 2));

  return new Response(JSON.stringify(newIssue), { status: 201 });
}






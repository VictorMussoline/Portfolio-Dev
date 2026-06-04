import { useEffect, useState } from "react";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  fork: boolean;
}

export function useGitHubProjects(username: string) {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`)
      .then((res) => res.json())
      .then((data: GitHubRepo[]) => {
        if (Array.isArray(data)) {
          // Filter out forks and missing descriptions, show only top 4
          const filtered = data.filter(r => !r.fork && r.description).slice(0, 4);
          setProjects(filtered);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch github projects", err);
        setLoading(false);
      });
  }, [username]);

  return { projects, loading };
}

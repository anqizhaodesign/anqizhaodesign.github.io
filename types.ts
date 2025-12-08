export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  image: string;
  designDrafts?: string[];
  summary: string;
  star: {
    situation: string;
    task: string;
    action: string[];
    result: string[];
  };
  tags: string[];
  color: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}
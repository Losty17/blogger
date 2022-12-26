export default interface Post {
  id: number;
  title: string;
  content: string;
  cover?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
}

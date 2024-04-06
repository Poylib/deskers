
export interface DirectoryItem {
  id: string;
  category: string;
  name: string;
  type: 'file' | 'directory';
  children?: DirectoryItem[];
}

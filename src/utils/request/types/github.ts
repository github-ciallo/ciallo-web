export interface MyReposRequest {
  visibility?: 'all' | 'public' | 'private';
  affiliation?: Array<'owner' | 'collaborator' | 'organization_member'>;
  type?: 'all' | 'owner' | 'public' | 'private' | 'member';
  sort?: 'created' | 'updated' | 'pushed' | 'full_name';
  direction?: 'asc' | 'desc';
  /**
   * 每页的仓库数目，最大 100
   * @default 30
   */
  per_page?: number;
  /**
   * @default 1
   */
  page?: number;
  /**
   * format: `2023-12-24T13:52:23Z`
   */
  since?: string;
  /**
   * format: `2023-12-24T13:52:23Z`
   */
  before?: string;
}
export interface MyReposResponse {}

export interface MyCreateRepoRequest {
  name: string;
  description?: string;
  homepage?: string;
  /**
   * 私有仓库，默认公开仓库
   * @default false
   */
  private?: boolean;
  has_issues?: boolean;
  has_projects?: boolean;
  has_wiki?: boolean;
  has_discussions?: boolean;
  team_id?: number;
  /**
   * 自动生成 README
   * @default false
   */
  auto_init?: boolean;
  gitignore_template?: string;
  license_template?: string;
  /**
   * 是否允许压制提交
   * @default true
   */
  allow_squash_merge?: boolean;
  allow_merge_commit?: boolean;
  allow_rebase_merge?: boolean;
  allow_auto_merge?: boolean;
  delete_branch_on_merge?: boolean;
  squash_merge_commit_title?: string;
  squash_merge_commit_message?: string;
  merge_commit_title?: string;
  merge_commit_message?: boolean;
  has_downloads?: boolean;
  is_template?: boolean;
}

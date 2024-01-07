import { queryMyRepos } from '@/utils/request';
import { useRequest } from 'ahooks';

export default () => {
  const { loading, data } = useRequest(queryMyRepos, {});

  console.log({ loading, data });

  return (
    <div>
      <div>ad</div>
    </div>
  );
};

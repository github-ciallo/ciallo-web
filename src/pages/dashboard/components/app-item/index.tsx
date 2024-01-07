import styles from './index.module.less';

interface IProps {
  name: string;
  description?: string;
  visibility: 'public' | 'private';
}

export default function (props: IProps) {
  const { name, description, visibility } = props;

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div className={styles.name}>{name}</div>
        <div className={styles.visibility}>{visibility}</div>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

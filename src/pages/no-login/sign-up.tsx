import styles from './index.module.less';

export default () => {
	return (
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.breadcrumb}>Back to SignIn</div>
				</div>
				<div className={styles.form}></div>
				<div className={styles.buttons}>
					<div className={styles.button}>Sign Up</div>
				</div>
				<div className={styles.actions}></div>
			</div>
	);
};

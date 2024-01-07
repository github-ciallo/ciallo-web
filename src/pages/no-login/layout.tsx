import { useState } from 'react';
import cls from 'classnames';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './layout.module.less';
import { useRequest } from 'ahooks';
import { queryBingDailyPictures } from '@/utils/request';
import { Outlet } from 'react-router-dom';

export default () => {
	const { data } = useRequest(queryBingDailyPictures);

	const [dailyPictureIndex, setDailyPictureIndex] = useState(0);

	const {
		result: { images },
	} = data || { result: { images: [] } };

	return (
		<div
			className={styles.background}
			style={{
				backgroundImage: images[dailyPictureIndex]
					? `url(https://cn.bing.com${images[dailyPictureIndex]?.urlbase}_1920x1080.webp&qlt=50)`
					: undefined,
			}}
		>
			<div className={styles.container}>
				<Outlet />
			</div>
			<div className={styles.footer}>
				<div className={styles.pictureSwitcher}>
					<div
						className={cls({
							[styles.pictureSwitcherButton]: true,
							[styles.pictureSwitcherButtonDisabled]: dailyPictureIndex >= images.length - 1,
						})}
						onClick={() =>
							dailyPictureIndex < images.length - 1 && setDailyPictureIndex((v) => v + 1)
						}
					>
						<LeftOutlined />
					</div>
					<div
						className={cls({
							[styles.pictureSwitcherButton]: true,
							[styles.pictureSwitcherButtonDisabled]: dailyPictureIndex <= 0,
						})}
						onClick={() => dailyPictureIndex > 0 && setDailyPictureIndex((v) => v - 1)}
					>
						<RightOutlined />
					</div>
				</div>
			</div>
		</div>
	);
};

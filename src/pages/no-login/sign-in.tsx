import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import EmailAutoComplete from '@/components/email-auto-complete';
import { useSetState } from 'ahooks';
import { useCallback } from 'react';
import styles from './index.module.less';
import { genRsaKey } from '@/utils/request';

export default () => {
	const [data, setData] = useSetState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();
	const [form] = Form.useForm();

	const handleLogin = useCallback(async () => {
		const key = await genRsaKey({
			maxAge: 1000,
		});
		console.log(key);

		await form.validateFields();
	}, [data]);

	return (
		<div className={styles.content}>
			<div className={styles.form}>
				<Form name='sign-in' form={form} requiredMark={false}>
					<Form.Item
						label='邮箱'
						name='email'
						rules={[
							{
								required: true,
								message: '请输入邮箱地址',
							},
							{
								type: 'email',
								message: '请输入合法的邮箱地址',
							},
						]}
					>
						<EmailAutoComplete
							style={{ width: '300px' }}
							value={data.email}
							onChange={(value) => {
								setData({
									email: value,
								});
							}}
						/>
					</Form.Item>
					<Form.Item
						label='密码'
						name='password'
						rules={[
							{
								required: true,
								message: '请输入登录密码',
							},
						]}
					>
						<Input.Password
							style={{ width: '300px' }}
							value={data.password}
							onChange={(e) => {
								setData({
									password: e.target.value,
								});
							}}
						/>
					</Form.Item>
				</Form>
			</div>
			<div className={styles.buttons}>
				<div className={styles.button} onClick={handleLogin}>
					登 录
				</div>
			</div>
			<div className={styles.actions}>
				<div className={styles.actionsButton} onClick={() => navigate('/signUp')}>
					注册账号
				</div>
				<div className={styles.actionsButton}>忘记密码</div>
			</div>
		</div>
	);
};

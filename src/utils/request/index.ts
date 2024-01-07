import type { IApiResult } from './api';

export * from './api';

export const wrapRequest = async <T, S>({
	promise,
	params,
	onError,
	onFailed,
}: {
	promise: (params: T) => Promise<IApiResult<S>>;
	params?: any;
	onError?: (ex: any) => S | null;
	onFailed?: (response: IApiResult) => S | null;
}): Promise<S | null> => {
	try {
		const response = await promise(params);

		if (response.success) {
			return response.result as S;
		}

		return onFailed ? onFailed(response) : null;
	} catch (ex) {
		return onError ? onError(ex) : null;
	}
};

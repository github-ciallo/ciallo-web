import axios from 'axios';
import type { MyCreateRepoRequest, MyReposRequest } from './types/github';
import type { IBingDailyPictureResponse } from './types/bing';
import { GithubRepository } from '@/types/github-api';
import { GenRsaKeyRequest } from './types/rsa';

export interface IApiResult<T = any> {
	success: boolean;
	result: T;
	errorMessage: string;
}

function getCsrfToken() {
	const cookies = document.cookie?.split(';') || [];
	for (const cookie of cookies) {
		const [key, value] = cookie.trim().split('=');
		if (key === 'csrfToken') return value;
	}

	return '';
}

const ApiInstance = (function () {
	const instance = axios.create({
		baseURL: '/api',
	});

	// instance.defaults.headers['x-csrf-token'] = getCsrfToken();
	instance.interceptors.request.use(function (request) {
		request.headers['x-csrf-token'] = getCsrfToken();
		return request;
	});

	instance.interceptors.response.use(function (response) {
		return response.data;
	});

	return instance;
})();

export const request = ApiInstance;

export const queryMyRepos = async (params?: MyReposRequest) => {
	return await request.get<any, IApiResult<GithubRepository[]>>('/github/my/repos', {
		params,
	});
};

export const queryBingDailyPictures = async (params?: { length: number }) => {
	return await request.get<any, IApiResult<IBingDailyPictureResponse>>('/bing/dailyPictures', {
		params,
	});
};

export const createRepo = async (params: MyCreateRepoRequest) => {
	return await request.post<any, IApiResult>('/github/my/createRepo', params);
};

export const genRsaKey = async (params?: GenRsaKeyRequest) => {
	return await request.post<any, any>('/rsa/genKey', params);
};

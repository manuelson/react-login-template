export interface User {
	firstname: string;
	lastname: string;
	email: string;
	token?: string;
	password?: string;
}

export interface LoginRequest {
	email: string | null;
	password: string | null;
}

export interface Response {
	data: object;
	status: string;
	message: string;
}

export interface User {
	firstname: string;
	lastname: string;
	email: string;
	token: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}

export interface Response {
	data: object;
	status: string;
	message: string;
}

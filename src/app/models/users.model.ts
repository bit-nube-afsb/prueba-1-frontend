export interface User {
    email: string,
    _id: string
}

export interface UserDTO {
    email: string,
    password: string,
}

export interface TokenResponse {
    response: string
}
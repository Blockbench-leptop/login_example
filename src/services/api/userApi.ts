
import {axios} from "../axios";
import {RegisterFormProps} from "../../pages/LoginForm/LoginForm";

interface APIResponse {
    status: string;
    data: any;
}

export const UserApi = {
    async signIn(postData: RegisterFormProps): Promise<APIResponse> {
        const {data} = await axios.post<APIResponse>(`/login`, postData)
        return data;
    },
    async me(): Promise<APIResponse> {
        const {data} = await axios.get<APIResponse>(`/settings`)
        return data;
    },
    async verifyUser(payload: { walletAddress: string }): Promise<APIResponse> {
        const {data} = await axios.post<APIResponse>(`/verify`, payload)
        return data;
    }
}

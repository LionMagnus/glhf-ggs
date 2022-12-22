import sendRequest from "./send-request";
const BASE_URL = '/api/comments';

export async function create(comments, id) {
    return sendRequest(`${BASE_URL}/${id}`, 'POST', comments)
}
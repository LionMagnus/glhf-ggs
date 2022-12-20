import sendRequest from "./send-request";
const BASE_URL = '/api/tournaments';

export async function index() {
    return sendRequest(BASE_URL)
}

export async function create(data) {
    return sendRequest(`${BASE_URL}/new`, 'POST', data)
}

export async function deleteTournament(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export async function edit(id, updatedTournament) {
    return sendRequest(`${BASE_URL}/edit/${id}`, 'PUT', updatedTournament)
}
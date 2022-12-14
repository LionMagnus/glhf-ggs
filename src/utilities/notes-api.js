import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

//user stories
export async function create(notes) {
  return await sendRequest(`${BASE_URL}/new`, 'POST', notes);
}

export async function getAll() {
  return await sendRequest(BASE_URL);
}

export async function deleteNote(_id) {
  console.log('notes-api', _id)
  return await sendRequest((`${BASE_URL}/${_id}`));
}
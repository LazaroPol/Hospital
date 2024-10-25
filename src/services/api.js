import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/persons' });

export const getAllPersons = async () => {

  const data = await instance.get();
  console.log(data);
  return data.data;

}
export const getPerson = async (id) => {

  const data = await instance.get("/" + id)
  console.log(333333333, data);
  return data.data;
}
export const savePersonName = async (obj) => {
 const insert =  await instance.post('/', obj)
 console.log(1111111, insert, obj)
}

export const deletePerson = async (id) => await instance.delete('/' + id);

export const updatePerson = async (obj) => await instance.put(`/${obj.id}`, obj );
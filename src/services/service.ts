import axios from 'axios';

interface ISearch{
    searchId: string,
  
}

export async function search(){

const response:ISearch = await axios.get('https://front-test.dev.aviasales.ru/search');
console.log(response);

// const response:any = await axios.get('/tickets.json');
// console.log(response);



}

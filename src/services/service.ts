
const token = 'token';
const urlCORSAnyWhere = `http://localhost:8080/http://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=LED&destination=JFK&departure_at=2025-03-12&return_at=2025-03-27&unique=false&sorting=price&direct=false&currency=rub&limit=30&page=1&one_way=true&token=${token}`;
// Cамые дешевые авиабилеты на определённые даты

export function getTickets() {
    return fetch(urlCORSAnyWhere, {
        method: 'GET',
      })
        .then((response) => {
            if (!response) {
                throw new Error(`HTTP error! Status: ${response}`);
            }
            return response.json();
        })
        .catch((error) => console.error('Ошибка:', error.message));
}


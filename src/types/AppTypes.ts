// export interface ITicket {
//     id: number,
//     origin: string,
//     origin_name: string,
//     destination: string,
//     destination_name: string,
//     departure_date: string,
//     departure_time: string,
//     arrival_date: string,
//     arrival_time: string,
//     carrier: string,
//     stops: number,
//     price: number
// }
export interface ITicket {
    origin:string,
    destination:string,
    origin_airport:string,
    destination_airport:string,
    price:number,
    airline:string,
    flight_number:string,
    departure_at:string,
    return_at:string,
    transfers:number,
    return_transfers:number,
    duration:number,
    duration_to:number,
    duration_back:number,
    link:string,
}
export interface IData{
    currency: string,
    data: ITicket[],
    success: boolean,
}
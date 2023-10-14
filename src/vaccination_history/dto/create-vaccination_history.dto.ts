export class CreateVaccinationHistoryDto {
    
    animal_id: string;
    vaccine_type_id:string;
    vaccinated_date:Date;
    next_vaccianated_date:Date;
    worker_id:string;
}

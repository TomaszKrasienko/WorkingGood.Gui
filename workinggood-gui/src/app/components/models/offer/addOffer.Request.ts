export interface AddOfferRequest{
  title: string;
  positionType: string;
  salaryRangeMin: number;
  salaryRangeMax: number;
  description: string;
  isActive: boolean;
}

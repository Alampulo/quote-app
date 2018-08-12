export class Quote {
  public showDetails:boolean;
  constructor (public name:string, public quote:string, public author:string, public upVote: number, public downVote: number, public postingDate:Date,){
    this.showDetails;false;
  }
}

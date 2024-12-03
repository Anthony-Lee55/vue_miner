

export class Mine{
  constructor(data){
    this.clickCount = data.clickCount || 1
    this.autoCount = data.autoCount || 0
    this.wood = 0
  }
}
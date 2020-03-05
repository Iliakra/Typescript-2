import Buyable from'./interface';


export default class Cart {
    items: Buyable[]=[];
    discount: number=25;

    add(item:Buyable): void {
        this.items.push(item);
    }

    getAll(): Buyable[] {
        return [...this.items];
    }

    getSum(items:Buyable[]): number{
        let sum = 0;
        for (let i=0; i < this.items.length; i++) {
            sum += this.items[i].price
        }
        return sum
    }

    getDiscount(discount: number): number {
        let sum = this.getSum(this.items);
        let totalAmount = sum - (sum * (discount/100));
        return totalAmount
    }

    deleteItem(id: number): void {
        let forDeletion = id;
        for (let i =0; i<this.items.length; i++) {
            if (this.items[i].id === forDeletion) {
                this.items.splice(i,1);
            }
        }
        
        


        

    }
} 

import { Figure } from './figure';

export class Cube extends Figure {
    private side : number;
    
    get Side() {
        return this.side;
    }
    set Side(val) {
        this.side = val;
    }

    public GetArea() {
        return Math.pow(this.Side,2);
    }
    public GetCircumference() {
        return 4  * this.Side;
    }
}

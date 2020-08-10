import { Figure } from './figure';

export class Rectangle extends Figure {
    protected width : number;
    protected height : number;
    
    get Width() {
        return this.width;
    }
    set Width(val) {
        this.width = val;
    }
    
    get Height() {
        return this.height;
    }
    set Height(val) {
        this.height = val;
    }
    public GetArea() {
        return this.Width * this.Height;
    }
    public GetCircumference() {
        return 2 * (this.Width + this.Height);
    }
}

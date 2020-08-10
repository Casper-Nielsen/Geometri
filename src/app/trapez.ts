import { Figure } from './figure'
export class Trapez extends Figure {
    protected sideA : number;
    protected sideB : number;
    protected angleA : number;
    protected angleB : number;
    protected height : number;
    
    get SideA() {
        return this.sideA;
    }
    set SideA(val) {
        this.sideA = val;
    }

    get SideB() {
        return this.sideB;
    }
    set SideB(val) {
        this.sideB = val;
    }

    get AngleA() {
        return this.angleA;
    }
    set AngleA(val) {
        this.angleA = val;
    }

    get AngleB() {
        return this.angleB;
    }
    set AngleB(val) {
        this.angleB = val;
    }
    
    get Height() {
        return this.height;
    }
    set Height(val) {
        this.height = val;
    }
    public GetArea() {
        return 0.5 * (this.SideA + this.SideB) * this.Height;
    }
    public GetCircumference() {
        return this.SideA + this.SideB + (this.Height * ((1/Math.sin(this.AngleA*Math.PI/180))+(1/Math.sin(this.AngleB*Math.PI/180))))
    }
}

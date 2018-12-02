import { OnChanges, Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'pm-stars-rating',
    templateUrl: './star.component.html',
    styleUrls:['./star.component.css']
})
export class StartComponent implements OnChanges{
    @Input() rating: number;

    starWidth:number;

    @Output() rightClick: EventEmitter<string> = new EventEmitter<string> ();
    
    ngOnChanges(){
        this.starWidth = this.rating * 75/5;
    }
    
    onClick(): void{
       this.rightClick.emit(`This is click ${this.rating} Was clicked`);
    }
}
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ark-button-options',
  templateUrl: './button-options.component.html',
  styleUrls: ['./button-options.component.scss']
})
export class ButtonOptionsComponent implements OnInit, OnDestroy {

  @Input() title;
  @Input() options;
  @Input() optionsError;

  selectedButtonNumber: number;

  choiceSubject = new BehaviorSubject<string>('');
  @Output() choiceChanged: EventEmitter<string> = new EventEmitter();

// this boolean is for testing purposes
  error: boolean;

  constructor() { }

  ngOnInit() {

    this.selectedButtonNumber = 0;

    this.choiceSubject.subscribe(obs => {
      if (!this.error) this.choiceChanged.emit(obs);
    });

    this.error = false;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.choiceSubject.unsubscribe();
  }
  
  pickOption(id: number) {
    this.selectedButtonNumber = (id + 1);
    console.log(id + 1);
    this.choiceSubject.next(this.options[id]);
  }

  // this method is for testing purposes
  onError() {
    if (!this.error) {
      this.error = true;
    } else {
      this.error = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuestionsState } from '../questions/questions.reducer';
import { makeSelectMaxPossibleScore, makeSelectTotalScore } from '../questions/questions.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public totalScore$: Observable<number>;
  public maxPossibleScore$: Observable<number>;

  constructor(private store: Store<QuestionsState>) {}

  public ngOnInit(): void {
    this.totalScore$ = this.store.pipe(select(makeSelectTotalScore));
    this.maxPossibleScore$ = this.store.pipe(select(makeSelectMaxPossibleScore));
  }
}

import {Component, OnInit} from '@angular/core';
import {calendar} from './data';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  clickCalendarForm: FormGroup;
  calendarYears = calendar.years;
  calendarDays = calendar.days;
  newDate = new Date();
  settingsYear = 4;
  month = '';
  nowMonth = new Date().getMonth();
  newYear = new Date().getFullYear();
  newWeek = new Date().getUTCDay();
  new = new Date().getDate();
  init = 0;
  weekday = [];
  form = false;
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  days = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ];

  openForm(): any {
    this.form = true;
  }

  closeForm(): any {
    this.form = false;
  }

  saveData(): void {
    this.form = false;
  }

  prev(): any {
    if (this.init === 0) {
      this.init = 12;
      this.newYear -= 1;
    }
    this.month = this.months[this.init];
    this.init--;
    this.calendarDay();
  }

  next(): any {
    if (this.init === 12) {
      this.init = 0;
      this.newYear += 1;
    }
    this.month = this.months[this.init];
    this.init++;
    this.calendarDay();
  }

  calendarDay(): any {
    if (this.month === 'January') {
      this.calendarDays.length = 31;
    } else if (this.month === 'February') {
      this.calendarDays.length = 28;
    } else if (this.month === 'March') {
      this.calendarDays.push('29', '30', '31');
    } else if (this.month === 'April') {
      this.calendarDays.length = 30;
    } else if (this.month === 'May') {
      this.calendarDays.push('31');
    } else if (this.month === 'June') {
      this.calendarDays.length = 30;
    } else if (this.month === 'July') {
      this.calendarDays.push('31');
    } else if (this.month === 'August') {
      this.calendarDays.length = 31;
    } else if (this.month === 'September') {
      this.calendarDays.length = 30;
    } else if (this.month === 'October') {
      this.calendarDays.push('31');
    } else if (this.month === 'November') {
      this.calendarDays.length = 30;
    } else if (this.month === 'December') {
      this.calendarDays.push('31');
    }
    for (let j = 0; j < this.calendarYears.length; j++) {
      if (j === this.settingsYear) {
        if (this.month === 'February') {
          this.settingsYear = this.settingsYear + 4;
          this.calendarDays.push('29');
        }
      }
    }
  }


  /*incomplete function */
  calendarWeekDay(): any {
    this.weekday = [
      ['monday'],
      ['tuesday'],
      ['wednesday'],
      ['thursday'],
      ['friday'],
      ['saturday'],
      ['sunday'],
    ];
    // tslint:disable-next-line:no-debugger
    debugger;
    for (let j = 0; j < this.weekday.length; j++) {
      if (j > 0) {
        break;
      }
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.days.length; i++) {
        console.log(this.days[i]);
        // @ts-ignore
        if (this.days.length <= this.days[i]) {
          break;
        }
        if (j === 7) {
          j = 0;
        }
        this.weekday[j].push(this.days[i]);
        console.log(this.weekday[j]);
        j++;

      }
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.clickCalendarForm = this.fb.group({
        dayData: [''],
      });
      console.log('%c Calendar ', 'background: #34495E; \'text-align: center\'; color: #13B477; font-weight: 700; font-size: 96px;');
  }
}

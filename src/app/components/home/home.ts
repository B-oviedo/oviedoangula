import {Component, Inject} from '@angular/core';
import { Logger } from '../../services/logger';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  private log: Logger = Inject(Logger);

  ngOnInit() {
    // @ts-ignore
    this.log('info','Home cargado');
  }

}

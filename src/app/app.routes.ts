import { Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz';

export const routes: Routes = [
  { path: 'home/:category/:subject/:quizId', component: QuizComponent },
  { path: '', redirectTo: 'home/derecho/introduccion_al_derecho/cuestionario_1', pathMatch: 'full' }
];

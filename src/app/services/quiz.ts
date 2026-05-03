import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getQuiz(category: string, subject: string, quizId: string): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/${category}/${subject}/${quizId}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private apiUrl = 'http://localhost:8080/home';

  constructor(private http: HttpClient) {}

  getQuiz(category: string, subject: string, quizId: string): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/${category}/${subject}/${quizId}`);
  }
}

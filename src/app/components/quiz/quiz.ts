import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuizService, Quiz } from '../../services/quiz';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class QuizComponent implements OnInit {
  quiz: Quiz | null = null;
  userAnswers: string[] = [];
  evaluated = false;
  results: boolean[] = [];

  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const category = params['category'];
      const subject = params['subject'];
      const quizId = params['quizId'];

      this.errorMessage = null;
      this.quizService.getQuiz(category, subject, quizId).subscribe({
        next: (data) => {
          this.quiz = data;
          this.resetQuiz();
        },
        error: (err) => {
          console.error('Error al cargar el cuestionario:', err);
          this.errorMessage = 'No se pudo cargar el cuestionario. Asegúrate de que el backend esté ejecutándose y la ruta sea correcta.';
        }
      });
    });
  }

  evaluate(): void {
    if (!this.quiz) return;
    
    this.evaluated = true;
    this.results = this.quiz.questions.map((q, i) => q.answer === this.userAnswers[i]);
  }

  resetQuiz(): void {
    if (!this.quiz) return;
    
    this.userAnswers = new Array(this.quiz.questions.length).fill('');
    this.evaluated = false;
    this.results = [];
  }
}

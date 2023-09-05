
    function Question(text, choices, correctChoiceIndex) {
        this.text = text;
        this.choices = choices;
        this.correctChoiceIndex = correctChoiceIndex;
      }
      
      // Define a Quiz class to manage the quiz
      class Quiz {
        constructor(questions) {
          this.questions = questions;
          this.currentIndex = 0;
          this.score = 0;
        }
      
        getCurrentQuestion() {
          return this.questions[this.currentIndex];
        }
      
        checkAnswer(choiceIndex) {
          const currentQuestion = this.getCurrentQuestion();
          if (currentQuestion.correctChoiceIndex === choiceIndex) {
            this.score += 1;
          }
        }
      
        nextQuestion() {
          if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.displayQuestion();
          } else {
            this.displayResults();
          }
        }
      
        displayQuestion() {
          const currentQuestion = this.getCurrentQuestion();
          document.getElementById('question').textContent = currentQuestion.text;
          for (let i = 0; i < currentQuestion.choices.length; i++) {
            const choiceButton = document.getElementById(`choice-${i + 1}`);
            choiceButton.textContent = currentQuestion.choices[i];
            choiceButton.addEventListener('click', () => this.checkAnswer(i));
          }
        }
      
      
      displayResults() {
        const totalQuestions = this.questions.length;
        const resultMessage = `Quiz completed!\nYou scored ${this.score} out of ${totalQuestions}`;
        
        const customAlert = document.getElementById('custom-alert');
        const customAlertText = document.getElementById('custom-alert-text');
        const customAlertClose = document.getElementById('custom-alert-close'); 
        const customAlertRestart = document.getElementById('custom-alert-restart');

        customAlertRestart.addEventListener('click', () => {
          customAlert.style.display = 'none';
            this.resetQuiz();
        });
        
        customAlertText.textContent = resultMessage;
        customAlert.style.display = 'block';
      
        customAlertClose.addEventListener('click', () => {
          customAlert.style.display = 'none';
          window.location.href="end.html";
        });
      }
      
 
        resetQuiz() {
          this.currentIndex = 0;
          this.score = 0;
          this.displayQuestion();
        }
     
      }
      
      // Questions
      const questions = [
        new Question('What does HTML stand for?', ['Hypertext Markup Language', 'Hyper Transfer Markup Language', 'High Text Markup Language', 'Hyperlinking Text Markup Language'], 0),
        new Question('Which programming language is often used for web development?', ['Java', 'Python', 'JavaScript', 'C++'], 2),
        new Question('What is the purpose of CSS?', ['To define the structure of a webpage', 'To add interactivity to a webpage', 'To style the presentation of a webpage', 'To perform server-side operations'], 2),
        new Question('Which of the following is a popular version control system?', ['GIT', 'HTML', 'HTTP', 'CSS'], 0),
        new Question('What does "HTTP" stand for?', ['HyperText Transfer Protocol', 'High Transfer Text Protocol', 'Hyperlink and Text Transfer Protocol', 'High Technology Text Protocol'], 0),
        new Question('What is the main function of a database management system (DBMS)?', ['To display web pages', 'To create animations', 'To store, manage, and retrieve data', 'To design user interfaces'], 2),
        new Question('What is the term for a small piece of code that can be reused and shared in programming?', ['Chip', 'Snippet', 'Shortcut', 'Segment'], 1),
        new Question('Which of the following is not a JavaScript framework or library?', ['React', 'Angular', 'Vue', 'JavaFX'], 3),
        new Question('What is the purpose of the "for" loop in programming?', ['To execute a block of code only once', 'To create an infinite loop', 'To repeat a block of code a specific number of times', 'To define a function'], 2),
        new Question('What does API stand for?', ['All Programming Interfaces', 'Application Programming Interface', 'Advanced Programming Interface', 'Automated Protocol Interface'], 1),
          ];
      
      // Create a Quiz instance with the questions array
      const quiz = new Quiz(questions);
      
      // Display the first question
      quiz.displayQuestion();
      
      // Add event listener to the "Next" button
      document.getElementById('next-button').addEventListener('click', () => quiz.nextQuestion());

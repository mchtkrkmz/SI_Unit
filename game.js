/**
 * SI Birimleri Oyunu - Gelişmiş Versiyon
 */

class SIUnitsGame {
    constructor() {
        this.currentScreen = 'splash';
        this.currentUnit = null;
        this.currentCategory = 'base';
        this.currentQuestion = 0;
        this.score = 0;
        this.stars = {};
        this.totalStars = 0;
        this.quizQuestions = [];
        this.quizIndex = 0;
        this.quizScore = 0;
        this.gameQuestions = [];

        this.init();
    }

    init() {
        this.loadProgress();
        this.setupEventListeners();
        this.renderUnitCards('base');
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem('siUnitsProgressV2');
            if (saved) {
                const data = JSON.parse(saved);
                this.stars = data.stars || {};
                this.totalStars = data.totalStars || 0;
            }
        } catch (e) { }
    }

    saveProgress() {
        try {
            localStorage.setItem('siUnitsProgressV2', JSON.stringify({
                stars: this.stars,
                totalStars: this.totalStars
            }));
        } catch (e) { }
    }

    setupEventListeners() {
        document.getElementById('start-btn')?.addEventListener('click', () => this.showScreen('menu'));
        document.getElementById('quiz-btn')?.addEventListener('click', () => this.startGeneralQuiz());
        document.getElementById('learn-back')?.addEventListener('click', () => this.showScreen('menu'));
        document.getElementById('play-unit-btn')?.addEventListener('click', () => this.startUnitGame());
        document.getElementById('game-back')?.addEventListener('click', () => this.showScreen('learn'));
        document.getElementById('quiz-back')?.addEventListener('click', () => this.showScreen('menu'));

        document.getElementById('result-retry')?.addEventListener('click', () => {
            if (this.currentUnit) this.startUnitGame();
            else this.startGeneralQuiz();
        });
        document.getElementById('result-menu')?.addEventListener('click', () => this.showScreen('menu'));

        // Kategori sekmeleri
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentCategory = btn.dataset.category;
                this.renderUnitCards(this.currentCategory);
            });
        });
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(`${screenId}-screen`)?.classList.add('active');
        this.currentScreen = screenId;
        if (screenId === 'menu') this.updateTotalStars();
    }

    renderUnitCards(category) {
        const grid = document.getElementById('units-grid');
        if (!grid) return;

        const units = category === 'base' ? SI_BASE_UNITS : SI_DERIVED_UNITS;

        grid.innerHTML = units.map(unit => `
            <div class="unit-card" data-unit="${unit.id}" style="--unit-color: ${unit.color}">
                <span class="stars">${this.getUnitStarsDisplay(unit.id)}</span>
                <span class="icon">${unit.icon}</span>
                <div class="symbol">${unit.symbol}</div>
                <div class="name">${unit.name}</div>
                <div class="quantity">${unit.quantity}</div>
            </div>
        `).join('');

        grid.querySelectorAll('.unit-card').forEach(card => {
            card.addEventListener('click', () => this.openUnit(card.dataset.unit));
        });
    }

    getUnitStarsDisplay(unitId) {
        const stars = this.stars[unitId] || 0;
        return '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    }

    updateTotalStars() {
        this.totalStars = Object.values(this.stars).reduce((a, b) => a + b, 0);
        document.getElementById('total-stars').textContent = this.totalStars;
    }

    openUnit(unitId) {
        const unit = ALL_UNITS.find(u => u.id === unitId);
        if (!unit) return;

        this.currentUnit = unit;

        document.getElementById('learn-badge').textContent = unit.symbol;
        document.getElementById('learn-badge').style.color = unit.color;
        document.getElementById('learn-mascot').textContent = unit.icon;
        document.getElementById('learn-title').textContent = unit.name;
        document.getElementById('learn-title').style.color = unit.color;
        document.getElementById('learn-description').textContent = unit.description;
        document.getElementById('learn-usage').textContent = unit.usage;
        document.getElementById('learn-fun').textContent = unit.funFact;

        // Formül kartı (türetilmiş birimler için)
        const formulaCard = document.getElementById('formula-card');
        if (unit.formula) {
            formulaCard.style.display = 'block';
            document.getElementById('learn-formula').innerHTML = `<strong>${unit.symbol}</strong> = ${unit.formula}`;
        } else {
            formulaCard.style.display = 'none';
        }

        document.getElementById('learn-examples').innerHTML = unit.examples.map(ex => `
            <div class="example-item">
                <span class="emoji">${ex.emoji}</span>
                <span class="text">${ex.text}</span>
            </div>
        `).join('');

        this.showScreen('learn');
    }

    startUnitGame() {
        if (!this.currentUnit) return;

        this.currentQuestion = 0;
        this.score = 0;
        this.gameQuestions = [...this.currentUnit.questions].sort(() => Math.random() - 0.5);

        document.getElementById('game-unit-badge').textContent = this.currentUnit.symbol;
        document.getElementById('game-stars').textContent = '0';

        this.showScreen('game');
        this.showGameQuestion();
    }

    showGameQuestion() {
        const question = this.gameQuestions[this.currentQuestion];
        if (!question) return this.endGame();

        document.getElementById('question-mascot').textContent = this.currentUnit.icon;
        document.getElementById('question-text').textContent = question.q;
        document.getElementById('question-image').textContent = question.image || '';
        document.getElementById('game-question-num').textContent = `${this.currentQuestion + 1}/${this.gameQuestions.length}`;
        document.getElementById('game-progress').style.width = `${(this.currentQuestion / this.gameQuestions.length) * 100}%`;

        const indices = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
        const container = document.getElementById('answers-container');
        container.innerHTML = indices.map(i => `
            <button class="answer-btn" data-index="${i}">${question.answers[i]}</button>
        `).join('');

        container.querySelectorAll('.answer-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleAnswer(parseInt(btn.dataset.index), question.correct));
        });
    }

    handleAnswer(selected, correct) {
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.add('disabled');
            const idx = parseInt(btn.dataset.index);
            if (idx === correct) btn.classList.add('correct');
            if (idx === selected && idx !== correct) btn.classList.add('wrong');
        });

        if (selected === correct) {
            this.score++;
            document.getElementById('game-stars').textContent = this.score;
        }

        this.showFeedback(selected === correct);

        setTimeout(() => {
            this.hideFeedback();
            this.currentQuestion++;
            this.showGameQuestion();
        }, 1000);
    }

    showFeedback(isCorrect) {
        const overlay = document.getElementById('feedback-overlay');
        const content = document.getElementById('feedback-content');
        content.className = 'feedback-content ' + (isCorrect ? 'correct' : 'wrong');
        content.querySelector('.feedback-icon').textContent = isCorrect ? '✓' : '✗';
        content.querySelector('.feedback-text').textContent = isCorrect ? 'Doğru! 🎉' : 'Yanlış 😢';
        overlay.classList.add('show');
    }

    hideFeedback() {
        document.getElementById('feedback-overlay').classList.remove('show');
    }

    endGame() {
        const total = this.gameQuestions.length;
        const percent = (this.score / total) * 100;
        let stars = percent >= 80 ? 3 : percent >= 60 ? 2 : percent >= 40 ? 1 : 0;

        if (this.currentUnit && stars > (this.stars[this.currentUnit.id] || 0)) {
            this.stars[this.currentUnit.id] = stars;
            this.saveProgress();
        }

        this.showResult(stars, this.score, total);
    }

    showResult(stars, score, total) {
        this.showScreen('result');

        document.querySelectorAll('.result-stars .star').forEach((el, i) => {
            el.classList.remove('active');
            if (i < stars) setTimeout(() => el.classList.add('active'), 300 + i * 300);
        });

        const msgs = [
            { t: 'Bir dahaki sefere!', m: 'Biraz daha pratik yapalım! 💪' },
            { t: 'İyi!', m: 'Gelişiyorsun, devam! 👍' },
            { t: 'Harika!', m: 'Çok iyi gidiyorsun! 🌟' },
            { t: 'Mükemmel!', m: 'Sen bir SI uzmanısın! 🏆' }
        ];
        const m = msgs[stars];

        document.getElementById('result-title').textContent = m.t;
        document.getElementById('result-message').textContent = m.m;
        document.getElementById('result-score-value').textContent = `${score}/${total}`;

        if (stars === 3) this.createConfetti();
    }

    createConfetti() {
        const container = document.getElementById('confetti');
        container.innerHTML = '';
        const colors = ['#667eea', '#f093fb', '#48bb78', '#f6e05e', '#fc8181', '#ed64a6'];

        for (let i = 0; i < 50; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
            piece.style.left = Math.random() * 100 + '%';
            piece.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(piece);
        }
        setTimeout(() => container.innerHTML = '', 4000);
    }

    startGeneralQuiz() {
        this.currentUnit = null;
        this.quizQuestions = [...GENERAL_QUIZ].sort(() => Math.random() - 0.5).slice(0, 15);
        this.quizIndex = 0;
        this.quizScore = 0;
        document.getElementById('quiz-score').textContent = '0';
        this.showScreen('quiz');
        this.showQuizQuestion();
    }

    showQuizQuestion() {
        const q = this.quizQuestions[this.quizIndex];
        if (!q) return this.endQuiz();

        document.getElementById('quiz-question').textContent = q.q;
        document.getElementById('quiz-question-num').textContent = `${this.quizIndex + 1}/${this.quizQuestions.length}`;
        document.getElementById('quiz-progress').style.width = `${(this.quizIndex / this.quizQuestions.length) * 100}%`;

        const indices = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
        const container = document.getElementById('quiz-answers');
        container.innerHTML = indices.map(i => `
            <button class="quiz-answer-btn" data-index="${i}">${q.answers[i]}</button>
        `).join('');

        container.querySelectorAll('.quiz-answer-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleQuizAnswer(parseInt(btn.dataset.index), q.correct));
        });
    }

    handleQuizAnswer(selected, correct) {
        document.querySelectorAll('.quiz-answer-btn').forEach(btn => {
            btn.disabled = true;
            const idx = parseInt(btn.dataset.index);
            if (idx === correct) btn.classList.add('correct');
            if (idx === selected && idx !== correct) btn.classList.add('wrong');
        });

        if (selected === correct) {
            this.quizScore++;
            document.getElementById('quiz-score').textContent = this.quizScore;
        }

        setTimeout(() => {
            this.quizIndex++;
            this.showQuizQuestion();
        }, 800);
    }

    endQuiz() {
        const total = this.quizQuestions.length;
        const percent = (this.quizScore / total) * 100;
        const stars = percent >= 80 ? 3 : percent >= 60 ? 2 : percent >= 40 ? 1 : 0;
        this.showResult(stars, this.quizScore, total);
    }
}

document.addEventListener('DOMContentLoaded', () => window.game = new SIUnitsGame());

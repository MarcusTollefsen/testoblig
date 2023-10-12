import questionsData from '../src/questions.json';


interface Answer {
    answere: string;
    correct?: boolean;
}

interface Question {
    title: string;
    answers: Answer[];
    helper: { text: string };
}

const questions: Question[] = questionsData.questions;

describe('Spørsmål', () => {

    it('Skal ha minst et spørsmål', () => {
        expect(questions.length).toBeGreaterThan(0);
    });

    
    it('Alle spørsmål skal minst ha et riktig svar', () => {
        questions.forEach(question => {
            const correctAnswers = question.answers.filter(answer => answer.correct === true);
            expect(correctAnswers.length).toBeGreaterThan(0);
        });
    });


    it('spørsmål skal ha tittel, svar og hjelpetekst', () => {
        questions.forEach(question => {
            expect(question).toHaveProperty('title');
            expect(typeof question.title).toBe('string');
            expect(question).toHaveProperty('answers');
            expect(Array.isArray(question.answers)).toBeTruthy();
            expect(question).toHaveProperty('helper');
            expect(typeof question.helper.text).toBe('string');
        });
    });


    it('Alle spørsmål skal ha hjelpetekst', () => {
        questions.forEach(question => {
            expect(question.helper.text.trim().length).toBeGreaterThan(0);
        });
    });
});
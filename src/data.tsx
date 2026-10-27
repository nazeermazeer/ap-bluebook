interface Question {
    number: number;
    question: string;
    options: string[];
    correctAnswerIndex: number;
}

const question: Question[] = [
    {
        number: 1,
        question: "Hierarchical diffusion is defined as the movement of a culture trait",
        options: ["across a geographic barrier such as an ocean or desert", "from a hearth or place of origin outward in all directions", "from more influential places to less influential places", "between places that are in close proximity to a line of transport", "that affects all places simultaneously regardless of their location"],
        correctAnswerIndex: 2
    }, {
        number: 2,
        question: "Is this a question?",
        options: ["yes", "no", "maybe", "all of the above", "none of the above"],
        correctAnswerIndex: 2
    }, {
        number: 3,
        question: "The most valuable method for understanding demographic changes in the U.S. is the",
        options: ["Statistical Abstract of the United States", "Result of public opinion polling", "Census", "Turnout in presidential elections", "Internal Revenue Service Statistical Tax Abstract"],
        correctAnswerIndex: 2
    }, {
        number: 4,
        question: "Which of the following answer choices is correct?",
        options: ["This answer is correct", "This answer is not correct", "Answer B and E is not telling the truth", "Answer A and C is not telling the truth", "None of them are telling the truth"],
        correctAnswerIndex: -1
    }
]

export function getQuestionData() {
    return question;
}
interface Question {
    number: number;
    question: string;
    options: string[];
    correctAnswerIndex: number;
}

const question: Question[] = [
    {
        number: 6,
        question: "Hierarchical diffusion is defined as the movement of a culture trait",
        options: ["across a geographic barrier such as an ocean or desert", "from a hearth or place of origin outward in all directions", "from more influential places to less influential places", "between places that are in close proximity to a line of transport", "that affects all places simultaneously regardless of their location"],
        correctAnswerIndex: 2
    }, {
        number: 69,
        question: "Is this a question?",
        options: ["yes", "no", "maybe", "all of the above", "none of the above"],
        correctAnswerIndex: 2
    }
]

export function getQuestionData() {
    return question;
}
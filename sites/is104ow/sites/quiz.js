document.addEventListener('DOMContentLoaded', (event) => {
    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('submit');
    const resultsContainer = document.getElementById('results');

    const questions = [];

    function addQue(question, answers, correctIndex) {
        questions.push({ question, answers, correctIndex });
    }

	addQue("What is Jakob's Law?", [
		"Users spend most of their time on other sites.",
		"Users prefer complex designs.",
		"Users dislike familiar layouts.",
		"Users need extensive training."
	], 0);

	addQue("What does Fitts's Law emphasize?", [
		"The importance of button size and placement.",
		"The need for colorful designs.",
		"The complexity of user tasks.",
		"The speed of internet connections."
	], 0);

	addQue("What is the main idea behind Hick's Law?", [
		"Simplifying choices reduces decision time.",
		"More options always lead to better decisions.",
		"Users prefer complex interfaces.",
		"All choices should be presented at once."
	], 0);

	addQue("According to Miller's Law, how many items can the average person hold in their memory?", [
		"5 ± 2",
		"7 ± 2",
		"10 ± 2",
		"3 ± 2"
	], 1);

	addQue("What does Postel's Law advocate for?", [
		"Being flexible and tolerant of user input.",
		"Strictly enforcing input formats.",
		"Limiting user actions.",
		"Ignoring user errors."
	], 0);

	addQue("What is the Aesthetic-Usability Effect?", [
		"Beautiful designs are perceived as more usable.",
		"Usability is more important than aesthetics.",
		"Users prefer simple designs.",
		"Aesthetics have no impact on usability."
	], 0);

	addQue("What does the Von Restorff Effect suggest?", [
		"Distinctive items are more likely to be remembered.",
		"All items should look the same.",
		"Users forget important information easily.",
		"Visual design is irrelevant."
	], 0);

	addQue("What is the Doherty Threshold?", [
		"Feedback should be provided within 400 ms.",
		"Users prefer longer wait times.",
		"All feedback should be visual.",
		"Response times do not matter."
	], 0);

	addQue("What is the main goal of progressive onboarding?", [
		"To minimize cognitive load for new users.",
		"To overwhelm users with information.",
		"To skip important steps.",
		"To make the interface more complex."
	], 0);

	addQue("What does the Automation Paradox refer to?", [
		"Automation can reduce human capabilities.",
		"Automation always improves efficiency.",
		"Users prefer manual tasks.",
		"Automation has no impact on skills."
	], 0);

	addQue("What is a common consequence of deceptive patterns?", [
		"Increased user trust.",
		"User frustration and distrust.",
		"Better user engagement.",
		"Higher conversion rates."
	], 1);

	addQue("What is the purpose of chunking information?", [
		"To reduce cognitive load.",
		"To increase complexity.",
		"To confuse users.",
		"To present all information at once."
	], 0);

	addQue("What does Tesler's Law state?", [
		"All processes have inherent complexity.",
		"Complexity can be completely eliminated.",
		"Users prefer complex interfaces.",
		"Simplicity is always better."
	], 0);

	addQue("What is the Halo Effect?", [
		"Positive impressions from attractive designs.",
		"Negative impressions from poor designs.",
		"Users ignore aesthetics.",
		"All designs are perceived equally."
	], 0);

	addQue("What is the main focus of inclusive design?", [
		"To accommodate as many users as possible.",
		"To create a one-size-fits-all solution.",
		"To exclude certain user groups.",
		"To simplify all interfaces."
	], 0);

	addQue("What is the significance of the Aesthetic-Usability Effect?", [
		"It makes users more tolerant of usability issues.",
		"It has no impact on user experience.",
		"It complicates design processes.",
		"It focuses solely on functionality."
	], 0);

	addQue("What does selective attention refer to?", [
		"Focusing on relevant information.",
		"Ignoring all information.",
		"Being overwhelmed by choices.",
		"Not noticing changes in the environment."
	], 0);

	addQue("What is the purpose of using animations during loading?", [
		"To distract users from waiting.",
		"To make waiting feel longer.",
		"To provide feedback and reduce perceived wait time.",
		"To confuse users."
	], 2);

	addQue("What is the goal of reducing cognitive load in design?", [
		"To make tasks easier for users.",
		"To complicate user interactions.",
		"To increase the number of steps.",
		"To overwhelm users with information."
	], 0);



    function buildQuiz() {
        const output = [];
        questions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (let i = 0; i < currentQuestion.answers.length; i++) {
                answers.push(
                    `<label>
                        <br><input type="radio" name="question${questionNumber}" value="${i}">
                        ${currentQuestion.answers[i]}
                    </label>`
                );
            }
            output.push(
                `<div class="quiz-container">
                    <h2>${currentQuestion.question}</h2>
                    <div>${answers.join('')}</div>
                </div>`
            );
        });
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.quiz-container');
        let numCorrect = 0;

        questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer == currentQuestion.correctIndex) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${questions.length} correct`;
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);
});

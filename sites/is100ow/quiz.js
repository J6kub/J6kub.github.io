document.addEventListener('DOMContentLoaded', (event) => {
    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('submit');
    const resultsContainer = document.getElementById('results');

    const questions = [];

    function addQue(question, answers, correctIndex) {
        questions.push({ question, answers, correctIndex });
    }

	addQue("What is Industry 1.0 characterized by?", [
		"Steam powered machines",
		"Electrical machines",
		"Computers",
		"Cyber-physical systems"
	], 0);

	addQue("What is Industry 2.0 characterized by?", [
		"Steam powered machines",
		"Electrical machines",
		"Computers",
		"Cyber-physical systems"
	], 1);

	addQue("Which technology is a key component of Industry 4.0?", [
		"Steam engines",
		"Electricity",
		"Computers",
		"Cyber-physical systems"
	], 3);

	addQue("What does ERP stand for?", [
		"Enterprise Resource Planning",
		"Enterprise Risk Planning",
		"Efficient Resource Planning",
		"Electronic Resource Planning"
	], 0);

	addQue("Which system focuses on managing customer data?", [
		"ERP",
		"CRM",
		"SCM",
		"DSS"
	], 1);

	addQue("Which industry phase introduced computers?", [
		"Industry 1.0",
		"Industry 2.0",
		"Industry 3.0",
		"Industry 4.0"
	], 2);

	addQue("What is a key benefit of using SCM?", [
		"Enhanced customer relations",
		"Efficient resource management",
		"Improved supply chain flow",
		"Automated decision making"
	], 2);

	addQue("Which term describes a person who works short-term, flexible jobs?", [
		"Digital nomad",
		"Nine-to-fiver",
		"Gig worker",
		"Travelling elite"
	], 2);

	addQue("Which of the following is an example of DSS?", [
		"Ride-sharing apps",
		"Financial forecasting tools",
		"Social media platforms",
		"Content management systems"
	], 1);

	addQue("What is a primary focus of Business Intelligence (BI)?", [
		"Creating physical products",
		"Analyzing business performance",
		"Managing customer relationships",
		"Automating workflows"
	], 1);

	addQue("What is a digital nomad?", [
		"A person who performs short-term jobs",
		"A person who works a traditional 9-to-5 job",
		"A person who travels frequently for work and works remotely",
		"A person who works in a factory"
	], 2);

	addQue("Which era is known for the introduction of steam engines?", [
		"Industry 1.0",
		"Industry 2.0",
		"Industry 3.0",
		"Industry 4.0"
	], 0);

	addQue("What does SCM stand for?", [
		"Supply Chain Management",
		"Software Configuration Management",
		"Service Chain Management",
		"Supply Compliance Management"
	], 0);

	addQue("Which term best describes high-level executives who travel frequently?", [
		"Gig worker",
		"Digital nomad",
		"Nine-to-fiver",
		"Travelling elite"
	], 3);

	addQue("What type of system is ERP?", [
		"Customer management",
		"Business management",
		"Information management",
		"Supply management"
	], 1);

	addQue("Which of these is a component of Industry 3.0?", [
		"Steam engines",
		"Electricity",
		"Computers",
		"Cyber-physical systems"
	], 2);

	addQue("What is the main advantage of using BPA?", [
		"Higher costs",
		"Reduced efficiency",
		"Manual processes",
		"Improved efficiency"
	], 3);

	addQue("Which of these is an example of a cyber-physical system?", [
		"Steam engine",
		"Assembly line",
		"Smart thermostat",
		"Manual typewriter"
	], 2);

	addQue("What does IT stand for?", [
		"Internet Technology",
		"Information Technology",
		"Interactive Technology",
		"Integrated Technology"
	], 1);

	addQue("Which concept involves real-time data exchange among devices?", [
		"BPA",
		"RPA",
		"IoT",
		"AIA"
	], 2);

	addQue("Which technology uses bots to automate repetitive tasks?", [
		"BPA",
		"RPA",
		"AIA",
		"IoT"
	], 1);

	addQue("Which of these systems integrates various business processes?", [
		"SCM",
		"CRM",
		"ERP",
		"DSS"
	], 2);

	addQue("What is the main function of CRM?", [
		"Managing supply chains",
		"Managing customer relationships",
		"Managing enterprise resources",
		"Managing digital assets"
	], 1);

	addQue("Which industrial revolution introduced mass production?", [
		"Industry 1.0",
		"Industry 2.0",
		"Industry 3.0",
		"Industry 4.0"
	], 1);

	addQue("What is a gig worker typically associated with?", [
		"Full-time employment",
		"Flexible, short-term jobs",
		"Long-term contracts",
		"Remote work only"
	], 1);

	addQue("Which system can analyze statistical data for decision making?", [
		"ERP",
		"SCM",
		"DSS",
		"CRM"
	], 2);

	addQue("What is the focus of IoT?", [
		"Human-machine interactions",
		"Interconnecting devices and systems",
		"Manual data processing",
		"Isolated computing"
	], 1);

	addQue("What is a nine-to-fiver?", [
		"A remote worker",
		"A freelancer",
		"A traditional full-time employee",
		"A travelling executive"
	], 2);

	addQue("What does BI help organizations with?", [
		"Improving physical products",
		"Enhancing business performance",
		"Automating manufacturing processes",
		"Developing software applications"
	], 1);

	addQue("Which of these is an example of RPA usage?", [
		"Factory assembly lines",
		"Automated customer service chatbots",
		"Supply chain optimization tools",
		"Enterprise resource planning"
	], 1);

	addQue("What does AIA stand for?", [
		"Automated Information Analysis",
		"Artificial Intelligence Automation",
		"Advanced Information Access",
		"Automated Interaction Agent"
	], 1);

	addQue("Which industrial era is characterized by smart automation?", [
		"Industry 1.0",
		"Industry 2.0",
		"Industry 3.0",
		"Industry 4.0"
	], 3);

	addQue("Which technology facilitates remote working while traveling?", [
		"BPA",
		"DSS",
		"IoT",
		"CRM"
	], 2);

	addQue("What role does IT play in organizations?", [
		"Managing physical facilities",
		"Providing technology infrastructure",
		"Conducting marketing campaigns",
		"Training employees"
	], 2);

	addQue("What does BPA stand for?", [
		"Business Process Analysis",
		"Business Process Automation",
		"Business Performance Assessment",
		"Business Platform Administration"
	], 1);

	addQue("Which concept refers to frequent business or luxury travel?", [
		"Digital nomad",
		"Nine-to-fiver",
		"Gig worker",
		"Travelling elite"
	], 3);

	addQue("Which of these technologies was pivotal during Industry 3.0?", [
		"Steam engines",
		"Assembly lines",
		"Electricity",
		"Computers"
	], 3);

	addQue("What does SCM aim to improve?", [
		"Customer satisfaction",
		"Supply chain efficiency",
		"Software development",
		"Employee productivity"
	], 1);

	addQue("Which tool would most likely be used for performance analytics?", [
		"BI",
		"ERP",
		"SCM",
		"CRM"
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

const openingPhrases = ["Embrace the unexpected.", "Dream big, start small.", "Why don't scientists trust atoms?..."];
const connectingActions = ["Take a leap of faith and", "Unleash your inner child and", "Because they make up everything!"];
const closingThoughts = ["the universe will catch you.", "let your imagination soar.", ""];

function getRandomMessage() {
	const randomOpening = openingPhrases[Math.floor(Math.random() * openingPhrases.length)];
	const randomAction = connectingActions[Math.floor(Math.random() * connectingActions.length)];
	const randomClosing = closingThoughts[Math.floor(Math.random() * closingThoughts.length)];

	return `${randomOpening} ${randomAction} ${randomClosing}`;
}

console.log(getRandomMessage());

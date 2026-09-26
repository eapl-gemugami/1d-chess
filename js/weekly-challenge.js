const WEEKLY_CHALLENGE_URL = "https://eapl.me/1dchess/api/"

async function fetchWeeklyChallenge() {
	const response = await fetch(WEEKLY_CHALLENGE_URL)
	if (!response.ok) {
		throw new Error("Weekly challenge request failed: " + response.status)
	}

	const challenge = await response.json()
	if (!challenge || typeof challenge.board !== "string" || !/^[KNRknr.]{8}$/.test(challenge.board) ||
		challenge.board.split("K").length !== 2 || challenge.board.split("k").length !== 2 ||
		!Number.isInteger(challenge.difficulty) || challenge.difficulty < 0 || challenge.difficulty > 3) {
		throw new Error("Invalid weekly challenge")
	}

	return challenge
}

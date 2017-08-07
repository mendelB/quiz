const url = "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple&encode=base64"

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

const makeQuizObjs = (json) => {
		return json.results.map(question => {
			const q = {
				question: b64DecodeUnicode(question.question),
				choices: question.incorrect_answers.map(c => b64DecodeUnicode(c)),
			}
			const correct_answer_index = Math.floor(Math.random() * (q.choices.length - 1) + 1);
			q.choices.splice(correct_answer_index, 0, b64DecodeUnicode(question.correct_answer))
			q.correctChoice = correct_answer_index
			return q
		})
	}

export default {
	getQuizes: () => {
		return fetch(url).then(res => res.json()).then(json => makeQuizObjs(json))
	},
}
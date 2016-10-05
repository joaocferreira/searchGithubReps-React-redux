export function makeQuery(data) {
	return {
		type: 'MAKE_QUERY',
		data
	};
}

export function addRepos(data) {
	return {
    type: 'ADD_REPOS',
    data
	};
}

export function typeQuery(data) {
	return {
    type: 'TYPE_QUERY',
    data
	};
}
// Initial state needed since we don't want app to start without sections shown
const INITIAL_STATE = {
	sections: [
		{
			title: "premium items",
			imageUrl: "https://i.ibb.co/hBRGwxH/nm-98-f.jpg",
			id: 1,
			linkUrl: "shop/premium",
		},
		{
			title: "regular items",
			imageUrl: "https://i.ibb.co/nbXgQ0h/xmewa-12.jpg",
			id: 2,
			linkUrl: "shop/regular",
		},
	],
};

// Any and all reducers for directory goes into this and is checked using switch case
const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;

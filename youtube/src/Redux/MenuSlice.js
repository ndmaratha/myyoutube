import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
	name: "menu",
	initialState: {
		item: true,
	},
	reducers: {
		menuOnClick: (state) => {
			state.item = !state.item;
		},
	},
});
export const { menuOnClick } = MenuSlice.actions;
export default MenuSlice.reducer;

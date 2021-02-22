import { createSelector } from "reselect";

export const selectDirectory = (state) => {
	return state.directory
}

export const selectDirectorySections = createSelector(
	[selectDirectory],
	(directory) => {
		return directory.sections
	}
)
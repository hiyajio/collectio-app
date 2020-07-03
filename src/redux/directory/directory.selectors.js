/* Selectors are used to avoid using the entire state and rerendering each time
something is passed through the one-way data flow (i.e. even if nothing changed
for the specific action-reducer combo, they still rerender since they're
sharing the same stream of data */
import { createSelector } from "reselect";

/* Selectors also aim to give us back only a piece of state for further optimization.
Seen here as state => state.directory => directory.sections (final) */
const selectDirectory = (state) => state.directory;

// Selector for getting only directory.sections state
export const selectDirectorySections = createSelector(
	[selectDirectory],
	(directory) => directory.sections
);

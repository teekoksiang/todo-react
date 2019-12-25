import { createSelector } from 'reselect';

const selectSection = state => state.section;

export const selectSections = createSelector(
  [selectSection],
  section => section.sections
);
export enum eCategory {
  DESKTERIA = 0,
  HOME_APPLIANCE,
  KEYBOARD,
  MONITOR,
  MOUSE,
  LIFE_HEALTH,
  SNACK,
  STRESS,
  OFFICE,
  IT_TREND,
  PPT,
}
export const categoryDict = {
  [eCategory.DESKTERIA]: { name: '데스크테리아', uri: 'deskteria', depth: 0 },
  [eCategory.HOME_APPLIANCE]: { name: '가전', uri: 'home-appliance', depth: 1 },
  [eCategory.KEYBOARD]: { name: '키보드', uri: 'keyboard', depth: 2 },
  [eCategory.MONITOR]: { name: '모니터', uri: 'monitor', depth: 2 },
  [eCategory.MOUSE]: { name: '마우스', uri: 'mouse', depth: 2 },

  [eCategory.LIFE_HEALTH]: { name: '생활/건강', uri: 'life-health', depth: 0 },
  [eCategory.SNACK]: { name: '간식', uri: 'snack', depth: 1 },
  [eCategory.STRESS]: { name: '스트레스', uri: 'stress', depth: 1 },

  [eCategory.OFFICE]: { name: '오피스', uri: 'office', depth: 0 },
  [eCategory.IT_TREND]: { name: 'IT 트렌드', uri: 'it-trend', depth: 1 },
  [eCategory.PPT]: { name: 'PPT', uri: 'ppt', depth: 1 },
};

export const categoryHierarchy = {
  [eCategory.DESKTERIA]: [eCategory.HOME_APPLIANCE],
  [eCategory.HOME_APPLIANCE]: [eCategory.KEYBOARD, eCategory.MONITOR, eCategory.MOUSE],
  [eCategory.LIFE_HEALTH]: [eCategory.SNACK, eCategory.STRESS],
  [eCategory.OFFICE]: [eCategory.IT_TREND, eCategory.PPT],
};

export const getCategoryList = () => {
  return {
    hierarchy: categoryHierarchy,
    categoryDict: categoryDict,
  };
};

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
  [eCategory.DESKTERIA]: { name: '데스크테리아', uri: 'deskteria' },
  [eCategory.HOME_APPLIANCE]: { name: '가전', uri: 'home-appliance' },
  [eCategory.KEYBOARD]: { name: '키보드', uri: 'keyboard' },
  [eCategory.MONITOR]: { name: '모니터', uri: 'monitor' },
  [eCategory.MOUSE]: { name: '마우스', uri: 'mouse' },

  [eCategory.LIFE_HEALTH]: { name: '생활/건강', uri: 'life-health' },
  [eCategory.SNACK]: { name: '간식', uri: 'snack' },
  [eCategory.STRESS]: { name: '스트레스', uri: 'stress' },

  [eCategory.OFFICE]: { name: '오피스', uri: 'office' },
  [eCategory.IT_TREND]: { name: 'IT 트렌드', uri: 'it-trend' },
  [eCategory.PPT]: { name: 'PPT', uri: 'ppt' },
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
    categoryDic: categoryDict,
  };
};

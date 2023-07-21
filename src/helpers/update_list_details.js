import { getForStorage } from "../models/tests";

export function updateListDetails(dictionary, sectionData, where, updater, setWhere, id, value) {
  let items = value.split(", ");
  const lastWhere = where.pop();

  if (items.length === 1)
    items = items.filter(val => val !== "");

  if (sectionData.length > items.length) {
    setWhere(-1, '');
  }

  const objects = items.map(item => {
      const found = sectionData.find(data => item.toLowerCase().replace(",", "").trim() === 
      data[lastWhere].toLowerCase());
      // If this item already exists in patient's data, return it
      if (found) {
        found[lastWhere] = item;
        return found;
      } else {
        // If it does not already exist, check if it matches any known templates
        const replacedItem = item.toLowerCase().replace(/ /g, "_");
        
        if (Object.keys(dictionary).find(dict => dict === replacedItem)) {
          return getForStorage.call({}, dictionary, item, lastWhere);
        } else {
          return { name: item, [lastWhere]: item, value: '' };
        }
      }
    });

  updater(where, objects);
}
export function cleanObject<T extends object>(obj: T): T {
  Object.keys(obj).forEach((key) => {
    const value = obj[key as keyof T];
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        obj[key as keyof T] = value
          .filter((item) => item !== undefined)
          .map((item) => {
            if (typeof item === 'object' && item !== null) {
              return cleanObject(item);
            }
            return item;
          }) as unknown as T[keyof T];
      } else {
        cleanObject(value);
      }
    } else if (value === undefined) {
      delete obj[key as keyof T];
    }
  });
  return obj;
}

export function removeFileExtension(filename: string): string {
  return filename.replace(/\.[^/.]+$/, '');
}

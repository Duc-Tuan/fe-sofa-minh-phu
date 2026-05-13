export const ensureMinimumLength = (data: string[], minLength: number = 10): string[] => {
  if (data.length >= minLength) {
    return data;
  }
  
  // Tính số lần cần clone để đạt độ dài tối thiểu
  const cloneCount = Math.ceil(minLength / data.length);
  const result: string[] = [];
  
  for (let i = 0; i < cloneCount; i++) {
    result.push(...data);
  }
  
  return result;
};
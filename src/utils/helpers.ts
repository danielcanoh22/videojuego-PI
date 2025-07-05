import { EmailContentData, EmailElementType } from "@/types/phishing";
import { Coordinates } from "@/types/trojan";

const normalizeAngle = (angle: number) => {
  while (angle > Math.PI) angle -= 2 * Math.PI;
  while (angle < -Math.PI) angle += 2 * Math.PI;
  return angle;
};

export const lerpAngle = (start: number, end: number, t: number) => {
  start = normalizeAngle(start);
  end = normalizeAngle(end);

  if (Math.abs(end - start) > Math.PI) {
    if (end > start) {
      start += 2 * Math.PI;
    } else {
      end += 2 * Math.PI;
    }
  }

  return normalizeAngle(start + (end - start) * t);
};

export const calcScore = (
  elementList: EmailElementType[],
  email: EmailContentData
) => {
  let pointsEarned = 0;
  let lostPoints = 0;

  const items = email.suspiciousItems ?? [];

  elementList.forEach((el) => {
    if (items.includes(el.name)) pointsEarned += 10;
    if (!items.includes(el.name)) lostPoints -= 5;
  });

  return [pointsEarned, lostPoints];
};

export const getRandomPosition = () => {
  const x = Math.random() * 20 - 10;
  const y = Math.random() * 20 - 10;
  const z = Math.random() * 2;
  return { x, y, z };
};

export const getUniqueRandomPositions = (
  count: number,
  positions: Coordinates[]
): Coordinates[] => {
  const uniquePositions: Coordinates[] = [];
  const usedIndices = new Set<number>();

  while (
    uniquePositions.length < count &&
    uniquePositions.length < positions.length
  ) {
    const randomIndex = Math.floor(Math.random() * positions.length);

    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      uniquePositions.push(positions[randomIndex]);
    }
  }

  return uniquePositions;
};

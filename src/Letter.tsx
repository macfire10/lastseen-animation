import * as React from "react";
import { useSpring, animated } from "react-spring";

const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

type LetterPosition = {
  top: string;
  left: string;
};

type LetterProps = {
  delay: number;
  customContent?: string;
  customPosition?: LetterPosition; 
};

function getLetterPosition(): LetterPosition {
  return {
    top: (Math.random() * 100).toFixed() + "%",
    left: (Math.random() * 100).toFixed() + "%"
  };
}

export const Letter = ({ delay, customContent, customPosition }: LetterProps) => {
  const position = customPosition || getLetterPosition();
  const letter: string = alphabet[Math.round(Math.random() * 26)];
  const rotated: string = `${Math.round(Math.random() * 60) - 30}deg`;

  const preventFading = customContent && customPosition

  const styles = useSpring({
    to: async (next: any) => {
      await next({ transform: `translate3d(0,0px,0) rotate(${rotated})` });
      await new Promise(resolve => setTimeout(resolve, 500));
      await next(preventFading ? {} : { color: "rgb(50, 50, 50)" });
    },
    from: {
      ...position,
      transform: "translate3d(0,-110vh,0) rotate(0deg)",
      color: "white"
    },
    delay: delay + Math.random() * 1000
  });

  return (
    <animated.div className="letter" style={styles} data-custom={!!preventFading}>
      {customContent || letter}
    </animated.div>
  );
};

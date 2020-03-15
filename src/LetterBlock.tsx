import * as React from "react";
import { Letter } from "./Letter";
import { customLetters } from "./customLetters";

type LetterBlockProps = {
  itemIndex: number;
  letterAmount: number;
};

const delayIndexes: number[] = [0, 100, 300, 500];

export const LetterBlock = ({ itemIndex, letterAmount }: LetterBlockProps) => {
  const letters = new Array(letterAmount).fill(1);
  const custom = customLetters[itemIndex - 1];

  return (
    <div className={`letter-block letter-block-${itemIndex}`}>
      {custom?.map(c => (
        <Letter
          delay={delayIndexes[itemIndex]}
          customContent={c[0]}
          customPosition={{ top: `${c[1]}%`, left: `${c[2]}%` }}
        />
      ))}
      {letters.map(() => (
        <Letter delay={delayIndexes[itemIndex]} />
      ))}
    </div>
  );
};

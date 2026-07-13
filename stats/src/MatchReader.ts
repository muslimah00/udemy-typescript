import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
<<<<<<< HEAD
import { MatchData } from './MatchData';
=======

type MatchData = [Date, string, string, number, number, MatchResult, string];
>>>>>>> ac5c7e29684a7b444a376e0f39b31ebcb99e50e7

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ];
      }
    );
  }
}

import React from 'react';
import Candidate from './Candidate';
import Card from '../card/Card';
import FlipMove from 'react-flip-move';

export default function Candidates({ candidates , previousVotes }) {
  return (
    <div>
      <FlipMove>
        {candidates.map((candidate, index) => {
          const { id } = candidate;

          const previousVoteObject = previousVotes.find(
            (item) => item.id === id
          );

          const previousVote = !!previousVoteObject ? previousVoteObject.votes : 0;

          return (
            
            <div>
              <Card key={id}>
                <Candidate previousVote={previousVote} candidate={candidate} position={index + 1} />
              </Card>
            </div>
          );
        })};
        </FlipMove>
    </div>
  )
}

import React, {useState} from 'react';
import styled from 'styled-components';

var MoreAnsweredQuestions = ({loadMore}) => {
  return (
    <MoreAnsweredQuestionsButton onClick={loadMore}> More Answered Questions </MoreAnsweredQuestionsButton>
  )
};

// styled components
var MoreAnsweredQuestionsButton = styled.button`
  border-radius: 5px;
`;

export default MoreAnsweredQuestions
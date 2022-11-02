import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  
  return (
    <ul className="goal-list">
      {
        props.data.map(goal => (
          <CourseGoalItem
            key={goal.id}
            id={goal.id}
            onDelete={props.onDeleteGoal}
          >
            {goal.text}
          </CourseGoalItem>
        ))
      }
    </ul>
  );
};

export default CourseGoalList;

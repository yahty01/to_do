// @flow
import * as React from 'react';
import {TasksProps} from "../db/TasksArray";
import styled from "styled-components";

type TaskProps = {
	tasks: TasksProps[];
}

export const Tasks = ({tasks}: TaskProps) => {
	return tasks.length === 0
		? (<EmptyMessage>Задачи отсутствуют!</EmptyMessage>)
		: (
			<StyledTasks>
				{tasks.map(task => (
					<li key={task.id}>
						<input type="checkbox" checked={task.isDone}/>
						<span>{task.title}</span>
					</li>)
				)}
			</StyledTasks>
		)

};

const StyledTasks = styled.ul`
  margin-left: 15px;
  border-left: black dotted 1px;
  padding-left: 5px;
  flex-grow: 1;

`
const EmptyMessage = styled.p`
	flex-grow: 1;
  margin: 0 auto;
`
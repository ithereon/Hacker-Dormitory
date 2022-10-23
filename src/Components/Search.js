import React, { useState } from 'react';
import { STUDENTS } from '../studentsList'

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search(props) {
	const [studentName, setStudentName] = useState('');
	const [joiningDate, setJoiningDate] = useState('');
	let isStudent = false;
	let isVaildDate = false;
	const addStudent = async () => {
		await STUDENTS.map(student => {
			if (student.name == studentName) {
				isStudent = true;
				isVaildDate = checkValidity(joiningDate, student.validityDate);
				if (!isStudent) {
					props.setMessage("Sorry," + studentName + " is not a verified student!");
				}
				if (!isVaildDate) {
					props.setMessage("Sorry," + studentName + "'s validity has Expired.");
				} else {
					props.setResidentsList(studentName);
				}
				return;
			} else {
				isStudent = false;
			}
		});
	}
	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" onChange={(e) => {
						setStudentName(e.target.value);
					}} />
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" onChange={(e) => {
						setJoiningDate(e.target.value);
					}} />
				</div>
			</label>
			<button type="button" data-testid="addBtn" className="small mb-0" onClick={addStudent}>Add</button>
		</div>
	);
}

export default Search;

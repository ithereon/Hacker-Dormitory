import React, { useState } from 'react';

function ResidentsList(props) {
	console.log(props.list, "1");
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				<li key="item1" className="slide-up-fade-in">
					John
				</li>
				{
					props.list.map((resident, index) => {
						return <li key={index} className="slide-up-fade-in">
							{resident}
						</li>
					})
				}
			</ul>
		</div>
	);
}

export default ResidentsList;

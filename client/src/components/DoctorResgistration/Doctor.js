import React from 'react';
import './Doctor.css';

const Doctor = () =>{
	return(

		<>
			<div className="head">
				<div className="registration">
				Doctors Registration
				</div>
				<div className="linetop">
				</div>
				<input type="text" className="input1"/>
				<input type="text" className="input2"/>
				<input type="text" className="input3"/>
				<input type="text" className="input4"/>
				<input type="text" className="input5"/>
				<input type="text" className="input6"/>
				<input type="text" className="input7"/>
				<input type="text" className="input8"/>
				<input type="text" className="input9"/>
				<input type="text" className="input10"/>
				<input type="text" className="input11"/>

				<div className="firstName">
				</div>
				<div className="lastName">
				</div>
				<div className="userName">
				</div>
				<div className="password">
				</div>
				<div className="speciality">
				</div>
				<div className="address">
				</div>
				<div className="clinicName">
				</div>
				<div className="aboutyou">
				</div>
				<div className="education">
				</div>
				<div className="opentime">
				</div>
				<div className="closetime">
				</div>
				<button className="button1"> Register </button>
				<br/>
				<button className="button2"> Already Registered? Sign In</button>
			</div>
		</>

		);
}

export default Doctor;

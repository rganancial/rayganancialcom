import { useState, useEffect } from "react"
import { db } from "../firebase"
import { collection, getDocs, doc } from "firebase/firestore"

const Home = () => {
	const [loading, setLoading] = useState(true)
	const [skills, setSkills] = useState([])
	const [workExperiences, setWorkExperiences] = useState([])
	const [education, setEducation] = useState([])

	useEffect(() => {
		document.title = "Ray Ganancial || Hello, there!"
	}, [])

	useEffect(() => {
		const getSkills = async () => {
			const data = await getDocs(collection(db, "skills"))
			setSkills(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
		}
		getSkills()

		const getWorkExperiences = async () => {
			const data = await getDocs(collection(db, "workExperience"))
			setWorkExperiences(
				data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			)
		}
		getWorkExperiences()

		const getEducation = async () => {
			const data = await getDocs(collection(db, "education"))
			setEducation(
				data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			)
		}
		getEducation()

		return () => {
			setLoading(false)
			console.log(loading)
		}
	}, [])

	return (
		<div className="rg-app-inner">
			<h1>
				Hello, my name is&nbsp;
				<span className="title-name">Ray Ganancial</span>
			</h1>
			<div className="resume">
				<div id="work-container" className="resume-section">
					<div className="resume-section-title">
						<h2>Work</h2>
					</div>
					<div className="resume-section-content">
						{workExperiences.length ? (
							workExperiences
								.sort((a, b) =>
									a.displayOrder < b.displayOrder ? 1 : -1
								)
								.map((work) => (
									<div key={work.id} className="work slideRight">
										<strong>{work.name}</strong>
										<p>
											{work.title} - {work.startDate} to{" "}
											{work.endDate}
										</p>
									</div>
								))
						) : (
							<div className="loading-container">
								<div className="loading half"></div>
								<div className="loading full"></div>
								<br />
								<div className="loading half"></div>
								<div className="loading full"></div>
								<br />
								<div className="loading half"></div>
								<div className="loading full"></div>
								<br />
								<div className="loading half"></div>
								<div className="loading full"></div>
							</div>
						)}
					</div>
				</div>
				<div id="edu-container" className="resume-section">
					<div className="resume-section-title">
						<h2>Education</h2>
					</div>
					<div className="resume-section-content">
						{education.length ? (
							education.map((edu) => (
								<div key={edu.id} className="edu slideRight">
									<strong>{edu.name}</strong>
									<p>
										{edu.degree}, {edu.field} -{" "}
										{edu.graduationYear}
									</p>
								</div>
							))
						) : (
							<div className="loading-container">
								<div className="loading half"></div>
								<div className="loading full"></div>
								<br />
							</div>
						)}
					</div>
				</div>
				<div id="skills-container" className="resume-section">
					<div className="resume-section-title">
						<h2>Skills</h2>
					</div>
					<div className="resume-section-content">
						{skills.length ? (
							skills.map((skill) => (
								<div key={skill.id} className="skill slideRight">
									{skill.name}
								</div>
							))
						) : (
							<div className="loading-container">
								<div className="loading half"></div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home

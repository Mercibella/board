import React, { useState } from 'react';
import './App.css'; 

const internData = [
  { id: 1, name: "Glory Ani", attendance: 110, tasks: [9, 10, 9, 8, 9], totalScore: 45, track: "frontend", picture: "./img/img1.jpg" },
  { id: 2, name: "Chioma Agu", attendance: 105, tasks: [9, 8, 10, 9, 10], totalScore: 46, track: "backend", picture: "url_to_picture" },
  { id: 3, name: "Promise Cheta", attendance: 115, tasks: [9, 9, 9, 10, 10], totalScore: 47, track: "frontend", picture: "url_to_picture" },
  { id: 4, name: "Chidiebere Obi", attendance: 120, tasks: [10, 10, 9, 10, 10], totalScore: 49, track: "backend", picture: "url_to_picture" },
  { id: 5, name: "Lote Nna", attendance: 110, tasks: [9, 10, 8, 10, 9], totalScore: 46, track: "frontend", picture: "url_to_picture" },
  { id: 6, name: "Emeka Joseph", attendance: 105, tasks: [10, 9, 9, 10, 9], totalScore: 47, track: "backend", picture: "url_to_picture" },
  { id: 7, name: "Obi Ngwu", attendance: 115, tasks: [8, 9, 10, 10, 8], totalScore: 45, track: "frontend", picture: "url_to_picture" },
  { id: 8, name: "Uche Boy", attendance: 120, tasks: [10, 10, 10, 9, 10], totalScore: 49, track: "backend", picture: "url_to_picture" },
  { id: 9, name: "Ada Agu", attendance: 110, tasks: [9, 10, 8, 9, 10], totalScore: 46, track: "frontend", picture: "url_to_picture" },
  { id: 10, name: "Chima John", attendance: 105, tasks: [10, 9, 10, 10, 8], totalScore: 47, track: "backend", picture: "url_to_picture" },
  { id: 11, name: "Luke Ogene", attendance: 115, tasks: [9, 9, 9, 10, 10], totalScore: 47, track: "frontend", picture: "url_to_picture" },
];

const Leaderboard = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('desc');

  const sortData = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const sortedData = sortBy ? [...internData].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] - b[sortBy];
    } else {
      return b[sortBy] - a[sortBy];
    }
  }) : internData;

  return (
    <div className="leaderboard-container">
      <h1>Leaderboard</h1>
      <div className="track-links">
        <a href="#frontend">Frontend</a>
        <a href="#backend">Backend</a>
        <a href="#productDesign">Product Design</a>
        <a href="#web3">Web 3</a>
      </div>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => sortData('name')}>Name</th>
            <th onClick={() => sortData('attendance')}>Attendance</th>
            <th onClick={() => sortData('tasks')}>Task 1</th>
            <th onClick={() => sortData('tasks')}>Task 2</th>
            <th onClick={() => sortData('tasks')}>Task 3</th>
            <th onClick={() => sortData('tasks')}>Task 4</th>
            <th onClick={() => sortData('tasks')}>Task 5</th>
            <th onClick={() => sortData('totalScore')}>Total</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((intern, index) => (
            <tr key={intern.id}>
              <td>{index + 1}</td>
              <td>
                <div className="intern-info">
                  <img src={intern.picture} alt={intern.name} className="intern-picture" />
                  <span>{intern.name}</span>
                </div>
              </td>
              <td>{intern.attendance}</td>
              {intern.tasks.map((task, i) => (
                <td key={i}>{task}</td>
              ))}
              <td>{intern.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

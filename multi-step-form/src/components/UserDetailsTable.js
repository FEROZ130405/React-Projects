import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

const UserDetails = () => {
  const submissions = useSelector((state) => state.form.submissions);

  return (
    <div className="container-expandable">
      <h2>User Details</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>City</th>
            <th>ZIP Code</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.firstName}</td>
              <td>{submission.lastName}</td>
              <td>{submission.email}</td>
              <td>{submission.phone}</td>
              <td>{submission.address}</td>
              <td>{submission.city}</td>
              <td>{submission.zip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;

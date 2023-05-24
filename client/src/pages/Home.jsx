import React from 'react'
import '../pages/_Home.scss'
import { Card } from 'antd';
import { useState, useEffect } from "react";
import { getAllUsers } from '../api/httprequests';
const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res);
    });
  }, []);
  return (
    <>
      <div className="section1">
        <div className="container">
          <div className="content">
            <h6>PROCESS VISA WITHOUT WITHIN HOURS</h6>
            <h1>Immigrations & <br />
              Visa Consultation</h1>
            <button>Book Consultancy</button>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="container">
          <h6>Start <b>planning</b> your <br />
            New <b>Dream</b></h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation.</p>
          <button>Request Free Consultancy</button>
        </div>
      </div>
      <div className="section3">
        <div className="container">
          <h1>Requirements to be Immigrants</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="section4">
       <div className="container">
       {
          users?.map((user) => {
            return (
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={user.imageUrl} />}
              >
                <button>Canada</button>
                <h1>SURNAME:{user.surname}</h1>
                <h1>NAME:{user.name}</h1>
                <h1>AGE:{user.age}</h1>

              </Card>
            )
          })
        }
       </div>
      </div>
      <div className="section5">
        <div className="container">

        </div>
      </div>
    </>
  )
}

export default Home
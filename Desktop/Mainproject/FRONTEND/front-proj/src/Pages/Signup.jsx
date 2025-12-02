import React from 'react'
import { Color } from 'three/src/Three.Core.js'
import '../index.css'
import { useNavigate } from 'react-router-dom'
import Login from './Login'



const Signup = () => {

  const Navigate = useNavigate();
  const back = () => { Navigate('/Login')}
  return (
    <div className='signup-container0'>

      <div className='signup-container1'>
       <span onClick={back} style={{ cursor: "pointer" }}>
          <img src='src/assets/is-less.png' alt="back" width="25" />
        </span>
        <h3>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/fluency/48/meta.png"
            alt="meta"
          />
          Meta
        </h3>
        <h2 className=''>Get started on instagram</h2>
        <p>Sign up to see photos and videos from your friends.</p>
        <p>Mobile number or Email address</p>
        <input id='input' placeholder='Mobile number or Email address'/>
        <p>
          You may receive notification from us. <a href='#' className='text-blue-500 no-decoration'>learn why ask for your information</a>
        </p>
        <p>Password</p>
        <input placeholder='Password' />
        <div className='Date-of-Birth'>
          <p>Date of birth ?</p>
          <select name="day" id="day">
            <option value="">Day</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </select>
          <select name="month" id="month">
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select name="year" id="year">
            <option value="">Year</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>2014</option>
            <option>2013</option>
            <option>2012</option>
            <option>2011</option>
            <option>2010</option>
            <option>2009</option>
            <option>2008</option>
            <option>2007</option>
            <option>2006</option>
            <option>2005</option>
            <option>2004</option>
            <option>2003</option>
            <option>2002</option>
            <option>2001</option>
            <option>2000</option>
            <option>1999</option>
            <option>1998</option>
            <option>1997</option>
            <option>1996</option>
            <option>1995</option>
            <option>1994</option>
            <option>1993</option>
            <option>1992</option>
            <option>1991</option>
            <option>1990</option>
          </select>
        </div>
        <div className='user-fullname'>
          <p>Name</p>
          <input placeholder='Full Name'/>
          <p>Username</p>
          <input placeholder='Username'/>
        </div>
        <article className='detail-arc'>
          <p>
            people who use our service may have uploaded your contact information to instagram.<a href='#' className='no-decoration' >Learn more</a>.
          </p>
          <p>
            By tapping Submit, you agree to create an account and to Instagram's <a href='#' className='text-blue-600'>Teams</a>,<a href='#' className=''>PrivacyPolice</a> and <a href='#' className='text-blue-600'>Coolies Policy</a>.
          </p>
        </article>
      </div>   
    </div>
  )
}

export default Signup

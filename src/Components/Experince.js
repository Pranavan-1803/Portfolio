import React from 'react';
import './Experince.css';
import Appareltree from '../Images/Appareltree.jpg';
import Sutherland from '../Images/Sutherland.jpg';

function Experince() {
    return (
        <div className="Experiences" id="Experience">
            <h1>Experiences</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://www.aagnaa.in/assets/img/logo.png" class="card-img-top" alt="Aagnaa"></img>
      <div class="card-body">
        <h5 class="card-title"> Aagnaa Software Labs ⏳(Jan 2019 - Present)</h5>
        <p class="card-text">Working as Manual test engineer and frontend developer.
        I started working as a manual test engineer for products and currently working as a front end developer.Here I am working in two projects were one is magic mirror -
        which is a virtual trial room and Digitisation in apparels</p>
      </div>
        </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Appareltree} class="card-img-top" alt="Appareltree"></img>
      <div class="card-body">
        <h5 class="card-title"> Appareltree Private Limited ⌛(Jul 2018 - Dec 2018)</h5>
        <p class="card-text">Worked as an E-commerce data executive. Here I was taking care of e-commerce seller account data. Worked to improving it with SEO, Analysing the market data
        and improving the content quality.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Sutherland} class="card-img-top" alt="Sutherland"></img>
      <div class="card-body">
        <h5 class="card-title"> Sutherland Global Services ⌛(Jul 2017 - Jun 2018)</h5>
        <p class="card-text">Worked as a consultant for the amazon.uk process. Here I used amazon tool to assist customer on their amazon account and devices.</p>
      </div>
    </div>
  </div>
  <div class="col">
  </div>
</div>
        </div>
    )
}

export default Experince

import React from 'react'
import countryFacts from "../api/countryData.json";
import Country from './Country';

const About = () => {
  return (
    <div>
      <>
      <section className='section-about container'>
        <h2 className='container-title'>
          Here are the Intresting Facts 
          <br />
          we're proud of
        </h2>

        <div className='gradient-cards'>

          {countryFacts.map((Country)=>{
            const {id, countryName , capital , population , interestingFact} = Country;
            return <div className='card' key={id}>
            <div className='container-card bg-yellow-box'>
              <p className='card-title'> {countryName}</p>
                <p>
                  <span className='card-description'>{capital}:</span>
                </p>
                <p>
                  <span className='card-description'>{population}:</span>
                </p>
                <p>
                  <span className='card-description'>{interestingFact}</span>
                </p>
                
                
                
              
            </div>
          </div>
          })}

        </div>
      </section>
      </>
    </div>
  )
}

export default About

import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Add = () => {
  return (
    <div>
        <Header/>

        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Title</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Message</label><br></br>
                    <textarea className='form-control' name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary">SUBMIT</button>
                </div>
            </div>

        </div>
    </div>
</div>

        
        
    </div>
  )
}

export default Add
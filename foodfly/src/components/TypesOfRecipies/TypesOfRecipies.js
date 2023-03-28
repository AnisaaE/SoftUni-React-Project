import {Link} from "react-router-dom"
import './Types.css'

export function TypesOfRecipies() {
    return (
        <div className="container marketing">
            <div className="col-lg-4">
              <img src="https://img.taste.com.au/WMldfrFD/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg"/>
              <h2 className="fw-normal">Main meals</h2>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
            <img src="https://www.allrecipes.com/thmb/BY8CcWT0JZOjFcWeIem9Fik1x78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9266919-c023924050f9406bab6eccea1664e88b.jpg"/>

                <h2 className="fw-normal">Cakes</h2>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <img src="https://thishealthytable.com/wp-content/uploads/2021/05/pesto-eggs-10-of-12-683x1024.jpg"/>
              <h2 className="fw-normal">Breakfast Meals</h2>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
      
            <div className="col-lg-4">
                <img src="https://thecleaneatingcouple.com/wp-content/uploads/2020/03/crockpot-whole-chicken-1.jpg"/>
                <h2 className="fw-normal">Healthy meals</h2>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
                <img src="https://www.air-dr.com/wp-content/uploads/2021/08/p03bhpv0.jpg"/>
                <h2 className="fw-normal">Others</h2>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
    </div>
    );
  }
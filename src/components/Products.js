import React,{Component} from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup  from 'react-bootstrap/ButtonGroup';
import products from '../data/products.json'
import { withRouter } from "react-router";

class Products extends Component{
    getProducts(){
        const productsData = products.map( (data) =>{
            return (
              <Button variant="light" key={data.id} className="rounded mb-0 mr-2 block-example border border-dark">
                 {data.name}</Button>
            )
          });
          return productsData;
    }
    onSubmitContinue = () =>{
        this.props.history.push('/reserve/');
    }
    render(){
        return (
            <div>
               <ButtonGroup size="lg" className="mb-2">
                    {this.getProducts()}
               </ButtonGroup>
               <Button variant="primary" onClick={() => this.onSubmitContinue()}>Continue</Button>{' '}
            </div>
        )
    }
}

export default Products
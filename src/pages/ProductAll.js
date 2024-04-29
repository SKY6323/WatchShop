import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ProductCard } from '../component/ProductCard'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const [query, setQuery] = useSearchParams();
    const [error, setError] = useState('');

    //json-server에 있는 db.json 데이터(API) 요청
    const getProduts = async() =>{
        try{
            let searchQuery = query.get('q')||'';
            let url = `http://localhost:5000/products?q=${searchQuery}`
            let response = await fetch(url);
            let data = await response.json();
            
            //console.log(data)
            if(data.length < 1) {
                if(searchQuery  !== ""){
                    setError(`${searchQuery}와 일치하는 상품이 없습니다.`)
                }else{
                    throw new Error("결과가 없습니다.")
                }
            }
            setProductList(data)
        }catch(error){
            console.log('error:', error)
        }
    }
    
    useEffect(()=>{
        getProduts(); //json server에 있는 데이터를 불러오는 함수(API)
    },[])

  return (
    <div>
        <Container>
            <Row className='product_list'>
                {
                    productList.map((item, index)=> (
                        <Col lg={3} key={index}>
                            <ProductCard item={item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll
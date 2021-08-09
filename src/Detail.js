import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props) {
  useEffect(() => {
    //코드를 적습니다 여기
  });
  let { id } = useParams();
  let history = useHistory();
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });
  let [inputData, inputData변경] = useState("");

  let Info = (props) => {
    return <p>재고 : {props.재고[id]}</p>;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${+id + 1}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes.find((x) => x.id == id).title}</h4>
          <p>{props.shoes.find((x) => x.id == id).content}</p>
          <p>{props.shoes.find((x) => x.id == id).price}원</p>
          <Info 재고={props.재고}></Info>
          {inputData}
          <input
            value="a"
            onChange={(e) => {
              inputData변경(e.target.value);
            }}
          />
          <button className="btn btn-danger">주문하기</button>
          <button
            onClick={() => {
              history.goBack();
            }}
            className="btn btn-danger"
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

// 퉤 뱉는다
export default Detail;

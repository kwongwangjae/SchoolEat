import React, { useState } from "react";
import styled from "styled-components";
import ramen from "../../images/013039_1.jpg";
import FarStar from "../main/FarStar";

const Review = () => {
  const [review, setReview] = useState("");
  const [reviewList, setReviewList] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  const handleSaveReview = () => {
    if (review.trim() !== "") {
      setReviewList([...reviewList, review]);
      setReview("");
    }
  };

  return (
    <>
      <Tag />
      <Block>
        <ImgBlock>
          <IMG src={ramen} />
          <MenuText>메뉴이름</MenuText>
          <Rating>
            <div>평균별점 </div>
            <FarStar />
          </Rating>
          <CategoryBox>메뉴카테고리로 돌아가기</CategoryBox>
        </ImgBlock>
        <ReviewBlock>
          <ReviewList>
            {reviewList.map((item, index) => (
              <ReviewBox key={index}>
                <ID></ID>
                <ReviewTextBox>{item}</ReviewTextBox>
              </ReviewBox>
            ))}
          </ReviewList>
          <ReviewBox>
            <ID></ID>
            <ComentBlock>
              <ReviewInput
                placeholder="후기를 입력하세요."
                value={review}
                onChange={handleChange}
              />
              <Button onClick={handleSaveReview}>등록</Button>
            </ComentBlock>
          </ReviewBox>
        </ReviewBlock>
      </Block>
    </>
  );
};

export default Review;

const Tag = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.3rem;
  height: 3rem;
  background: #fff6a6;
  margin-bottom: 2rem;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
`;

const ImgBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 5rem;
  width: 35rem;
  height: 40rem;
`;

const ReviewBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 3rem;
  width: 50rem;
  height: 40rem;
`;

const IMG = styled.img`
  display: flex;
  justify-content: center;
  width: 35rem;
  height: 25rem;
`;

const MenuText = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  margin-top: 1rem;
  justify-content: center;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  font-size: 1.2rem;
`;

const CategoryBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-left: 10rem;
  font-size: 1.2rem;
  width: 15rem;
  height: 3rem;
  background: #05c3ff;
  border-radius: 1rem;
`;

const ReviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 45rem;
  height: 7rem;
  background: #ecebeb;
  margin-top: 1rem;
`;

const ReviewList = styled.div`
  margin-top: 1rem;
  width: 45rem;
  height: 35rem;
  overflow-y: scroll;
`;

const ReviewTextBox = styled.div`
  display: flex;
  width: 42rem;
  height: 3.5rem;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px white;
`;

const ReviewInput = styled.textarea`
  display: flex;
  width: 35rem;
  height: 3.5rem;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px white;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  width: 4rem;
  height: 4rem;
  background: #fff6a6;
  border: 1px white;
`;

const ComentBlock = styled.div`
  display: flex;
  position: absolute;
`;

const ID = styled.div``;

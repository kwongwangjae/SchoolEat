import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FarStar from "../main/FarStar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface MenuInfo {
  image: string;
  NAME: string;
}

const Review = () => {
  const { menuId } = useParams();
  const [menuInfo, setMenuInfo] = useState<MenuInfo | null>(null);
  const [review, setReview] = useState("");
  const [reviewList, setReviewList] = useState<string[]>([]);

  useEffect(() => {
    fetchMenuInfo(menuId);
    fetchReviews(menuId);
  }, [menuId]);

  const fetchMenuInfo = (menuId: any) => {
    // TODO: 메뉴 ID를 기반으로 API 호출하여 메뉴 정보를 가져오는 로직 구현
    fetch(`/api/menu/${menuId}`)
      .then((response) => response.json())
      .then((menuInfo) => {
        setMenuInfo(menuInfo);
      })
      .catch((error) => {
        console.error("메뉴 정보 조회 실패:", error);
        // 에러 처리 로직을 추가해주세요
      });
  };

  const fetchReviews = (menuId: any) => {
    // TODO: 메뉴 ID를 기반으로 API 호출하여 리뷰 목록을 가져오는 로직 구현
    fetch(`/menu/${menuId}/reviews`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("리뷰 목록 조회 실패");
        }
        return response.json();
      })
      .then((reviews) => {
        setReviewList(Array.isArray(reviews) ? reviews : []); // 배열로 처리
      })
      .catch((error) => {
        console.error("리뷰 목록 조회 실패:", error);
        setReviewList([]);
      });
  };

  const saveReview = () => {
    if (review.trim() !== "") {
      setReviewList([...reviewList, review]);
      setReview("");
      const data = {
        menu_id: menuId,
        student_number: "", // 리뷰를 작성한 학번 정보
        rating: 5, // 리뷰 평점
        content: review, // 리뷰 내용
      };

      // API 호출을 통해 리뷰 등록
      fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            console.log("리뷰 작성 성공");
          } else {
            throw new Error("리뷰 작성 실패");
          }
        })
        .catch((error) => {
          console.error("리뷰 작성 실패:", error);
          // 에러 처리 로직을 추가해주세요
        });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };

  return (
    <>
      <Tag />
      <Block>
        <ImgBlock>
          <IMG src={menuInfo?.image} alt="Menu" />
          <MenuText>{menuInfo?.NAME}</MenuText>
          <Rating>
            <div>평균별점 </div>
            <FarStar />
          </Rating>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <CategoryBox>메뉴카테고리로 돌아가기</CategoryBox>
          </Link>
        </ImgBlock>
        <ReviewBlock>
          <ReviewList>
            {reviewList.map((item, index) => (
              <ReviewBox key={index}>
                <ID></ID>
                <Block2>
                  <FarStar />
                </Block2>
                <ReviewTextBox>{item}</ReviewTextBox>
              </ReviewBox>
            ))}
          </ReviewList>
          <ReviewBox>
            <ID></ID>
            <ComentBlock>
              <FarStarBlock>
                <div>별점남기기</div>
                <Block>
                  <FarStar />
                </Block>
              </FarStarBlock>
              <ReviewInput
                placeholder="후기를 입력하세요."
                value={review}
                onChange={handleChange}
              />
              <Button onClick={saveReview}>등록</Button>
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

const Block2 = styled.div`
  display: flex;
  margin-left: 30rem;
  margin-bottom: 0.2rem;
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
  margin-bottom: 1rem;
`;

const ReviewInput = styled.textarea`
  display: flex;
  width: 25rem;
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

const FarStarBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 2rem;
`;

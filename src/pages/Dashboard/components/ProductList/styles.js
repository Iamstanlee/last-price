import styled from "styled-components"

export const CardContainer = styled.div`
  width: 100%;
  text-align: left;
`
export const Card = styled.div`
  padding: 0.7rem;
  margin: 0.7rem 0;
  background: #fff;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: .8rem;
`

export const Name = styled.h6`
  font-size: 1.1rem;
  margin: 0;
`

export const Price = styled.span`
  font-size: 0.9rem;
`
export const Sales = styled.span`
  color: #000;
  font-size: 0.8rem;
  margin: 0;
  padding-left: .6rem;
`

import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft = styled.section`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
`
export const BannerWrapper = styled.div`
  overflow: hidden;
  width: 625px;
  height: 240px;
  background-color: skyblue;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  font-size: 14px;
  color: #000;
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  .pic {
    float: right;
    display: inline-block;
    width: 150px;
    height: 100px;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  width: 475px;
  float: left;
  padding-right: 15px;
  box-sizing: border-box;
  .title {
    margin: -7px 0 4px;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    &:visited {
      color: #969696;
    }
  }
  .desc {
    margin: 0 0 8px;
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`
export const HomeRight = styled.section`
  float: right;
  width: 280px;
  height: 100px;
`
export const RecommendWrapper = styled.ul`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.li`
  width: 100%;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background: url(${props => props.imgUrl}) no-repeat top left/contain;
`
export const WritterWrapper = styled.ul`
  width: 278px;
  height: 300px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  text-align: center;
`

export const WritterItem = styled.li``
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #a5a5a5;
  margin: 30px 0;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  cursor: pointer;
`
